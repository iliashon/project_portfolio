import { spanRotate } from "./modules/burger";
import switchingPage from "./modules/page-switching"

document.addEventListener('DOMContentLoaded', () => {
  switchingPage();
  spanRotate();
})