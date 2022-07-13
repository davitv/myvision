import purgeCanvasMouseEvents from '../../../../canvas/mouseInteractions/mouseEvents/resetCanvasUtils/purgeAllMouseHandlers';
import { setDefaultCursorModeAfterAlteringPolygonPoints, setDefaultCursorMode } from '../../../../canvas/mouseInteractions/cursorModes/defaultMode';
import assignDefaultEvents from '../../../../canvas/mouseInteractions/mouseEvents/eventHandlers/defaultEventHandlers';
import {
  getLastDrawingModeState, getBoundingBoxDrawingInProgressState,
  setAddingPolygonPointsState, getDefaultState, getRemovingPolygonPointsState,
  getPolygonDrawingInProgressState, setDefaultState, getAlteringPolygonPointsState,
  getAddingPolygonPointsState, setReadyToDrawShapeState, setRemovingPolygonPointsState,
  setCancelledReadyToDrawState, getReadyToDrawShapeState, setAlteringPolygonPointsState,
} from '../../../state';
import {
  cleanPolygonPointsArray, resetAddPoints, isAddingPointsToPolygon, getPolygonIdIfEditing,
} from '../../../../canvas/objects/polygon/alterPolygon/alterPolygon';
import setInitialStageOfAddPointsOnExistingPolygonMode from '../../../../canvas/mouseInteractions/cursorModes/initialiseAddPointsOnExistingPolygonMode';
import assignAddPointsOnExistingPolygonEvents from '../../../../canvas/mouseInteractions/mouseEvents/eventHandlers/addPointsEventHandlers';
import { resetNewPolygonData } from '../../../../canvas/objects/polygon/polygon';
import { setRemoveLabelsButtonToDisabled } from '../../styling/state';
import { clearBoundingBoxData } from '../../../../canvas/objects/boundingBox/boundingBox';

function dismissAddPointsEvents(canvas) {
  if (isAddingPointsToPolygon()) {
    assignAddPointsOnExistingPolygonEvents(canvas);
    resetAddPoints();
    setInitialStageOfAddPointsOnExistingPolygonMode(canvas);
  }
  resetAddPoints();
  setAddingPolygonPointsState(false);
  purgeCanvasMouseEvents(canvas);
  setDefaultCursorModeAfterAlteringPolygonPoints(canvas);
  assignDefaultEvents(canvas, getPolygonIdIfEditing());
}

function dismissRemovePointsEvents(canvas) {
  if (getPolygonDrawingInProgressState()) {
    resetNewPolygonData();
    setRemoveLabelsButtonToDisabled();
  }
  purgeCanvasMouseEvents(canvas);
  cleanPolygonPointsArray();
  setDefaultCursorModeAfterAlteringPolygonPoints(canvas);
  assignDefaultEvents(canvas, getPolygonIdIfEditing());
  setRemovingPolygonPointsState(false);
}

function dismissOtherEvents(canvas) {
  if (getReadyToDrawShapeState()) {
    setCancelledReadyToDrawState(true);
  } else {
    setCancelledReadyToDrawState(false);
  }
  if (getPolygonDrawingInProgressState()) {
    resetNewPolygonData();
    setRemoveLabelsButtonToDisabled();
  }
  if (getBoundingBoxDrawingInProgressState() || getLastDrawingModeState() === 'boundingBox') {
    clearBoundingBoxData();
  }
  purgeCanvasMouseEvents(canvas);
  assignDefaultEvents(canvas, null, getAddingPolygonPointsState());
  setDefaultCursorMode(canvas);
}

function initiateEditShapesEvent(canvas) {
  canvas.discardActiveObject();
  if (!getDefaultState()) {
    if (getAddingPolygonPointsState()) {
      dismissAddPointsEvents(canvas);
    } else if (getRemovingPolygonPointsState()) {
      dismissRemovePointsEvents(canvas);
    } else {
      dismissOtherEvents(canvas);
    }
    if (getAlteringPolygonPointsState()) {
      setAlteringPolygonPointsState(false);
    }
    setReadyToDrawShapeState(false);
    setDefaultState(true);
  }
}

export { initiateEditShapesEvent as default };
