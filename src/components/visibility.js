import * as actions from "../actions";
import store from "../store";

let hidden = true;
let visibilityChange = "";
if (typeof document.hidden !== "undefined") {
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

function handleVisibilityChange() {
  if (document[hidden]) {
    store.dispatch(actions.hidden_window());
  } else {
    store.dispatch(actions.visible_window());
  }
}

if (typeof document.addEventListener === "undefined" || hidden === undefined) {
  console.log(
    "This app requires a browser that supports the Page Visibility API"
  );
} else {
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
}
