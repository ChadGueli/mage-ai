from distutils.dir_util import copy_tree
from mage_ai.data_preparation.models.pipeline import Pipeline
from typing import Callable
import multiprocessing
import os
import shutil


class PipelineExecution:
    """
    Singleton class to manage the current pipeline execution running in
    the websocket. We need to track the state of this execution because
    it will be run in a seperate process, and the user can choose to cancel
    the execution.
    """
    def __init__(self):
        self.current_pipeline_process: multiprocessing.Process = None
        self.previous_config_path: str = None

pipeline_execution = PipelineExecution()


def set_current_pipeline_process(process: multiprocessing.Process) -> None:
    """
    Set the process that the current pipeline execution is running in.
    """
    pipeline_execution.current_pipeline_process = process


def cancel_pipeline_execution(
    pipeline: Pipeline,
    publish_message: Callable[..., None],
) -> None:
    """
    Cancel the current pipeline execution running in the saved process
    if there the process is alive.
    """
    current_process = pipeline_execution.current_pipeline_process
    if current_process.is_alive():
        pipeline_execution.current_pipeline_process.terminate()
    publish_message(
        'Pipeline execution cancelled... reverting state to previous iteration',
        execution_state='idle',
    )
    config_path = pipeline_execution.previous_config_path
    if config_path is not None and os.path.isdir(config_path):
        copy_tree(config_path, pipeline.dir_path)
        delete_pipeline_copy_config(config_path)


def reset_execution_manager() -> None:
    """
    Reset state on the execution manager.
    """
    pipeline_execution.current_pipeline_process = None
    pipeline_execution.previous_config_path = None


def set_previous_config_path(path: str) -> None:
    """
    Save the path where we save the copy of the pipeline config before
    running the execution.
    """
    pipeline_execution.previous_config_path = path


def delete_pipeline_copy_config(path: str) -> None:
    """
    Delete the files for the copy of the pipeline config. This should
    only be used to delete the extra copy.
    """
    if os.path.isdir(path):
        shutil.rmtree(path)
