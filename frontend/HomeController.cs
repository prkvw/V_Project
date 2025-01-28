namespace myWebapp.controllers { 
    public class HomeController : Controller {
        public IActionResult Index() {
            return View();
        }
        private string JoinTwoStrings(string a, string b) {
           var NewString = string.Concat (one,two);
            return NewString ;
        }
}
}