import home from "./pages/home.js";
import club3 from "./pages/club3.js";
import club4 from "./pages/club4.js";
import login from "./components/login.js";
import club1 from "./pages/club1.js";
import club2 from "./pages/club2.js";

async function router() {
  switch (location.hash) {
    case "":
      $("main").html(await home());
      break;

  
    case "#club3":
      $("main").html(await club3());
      break;

    case "#login":
      $("main").html(await login());
      break;
    
    case "#club1":
      $("main").html(await club1());
      break;

      case "#club2":
        $("main").html(await club2());      
        break;

        case "#club4":
        $("main").html(await club4());      
        break;

    default:
      $("main").html(
        `<h2><strong>404</strong> Good job! You've broken the internet.</h2>`
      );
  }
}

window.onhashchange = router
window.onload = router