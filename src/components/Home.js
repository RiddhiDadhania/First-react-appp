export const Home = () => {

    function slidernext() {
      // var a = document.querySelectorAll(".next");
      // for (var i = 0, length = a.length; i < length; i++) {
        // alert(a.length);
        // a[i].onclick = function () {
          var b = document.querySelector("li.active");
          if (b) {
            var items = document.querySelectorAll("li");
            // // alert(items.length);
            var lastchild = items[items.length - 1];
            // alert(lastchild.innerHTML);
            if (b !== lastchild) {
              // alert('next');
              b.classList.remove("active");

            }
            b.nextElementSibling?.classList?.add('active');
          }

        // };
      }


  function sliderprev() {
      // var r = document.querySelectorAll(".prev");
      // for (var j = 0, prelength = r.length; j < prelength; j++) {
        // alert(i);
        // r[j].onclick = function () {
          var bca = document.querySelector("li.active");
          if (bca) {

            var itemspre = document.querySelectorAll("li")[0];
            // var lastchildpre = itemspre.children[0];
            // alert(itemspre.innerHTML);
            if (bca !== itemspre) {
              bca.classList.remove("active");

            }
            bca.previousElementSibling?.classList?.add('active');
          }

        // };
      }

    return <div>

        <section id="hero" className="banner">
            <div className="wrapper">
                <div className="welcome">
                    <h1><strong>Apollo</strong> Jade Template</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
                </div>
                <div className="photographer"><img src="img/hero.png" alt="Photographer" /></div>
            </div>
        </section>

        <section id="about">
            <div className="wrapper">
                <div className="camera"><img src="/img/camera.png" alt="Camera" /></div>
                <div className="blurb">
                    <h2>My name is <strong>Apollo</strong></h2>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<br />Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    <div className="social"><a href="#"><i className="icon-facebook"></i></a><a href="#"><i className="icon-instagram"></i></a><a href="#"><i className="icon-twitter"></i></a><a href="#"><i className="icon-pinterest-p"></i></a></div>
                </div>
            </div>
        </section>

        <section id="full-slide">
            <ul className="banner">
                <li className="active"></li>
                <li className=""></li>
                <li className=""></li>
            </ul>
            <i className="icon-chevron-thin-left prev" onClick={sliderprev}></i><i className="icon-chevron-thin-right next" onClick={slidernext}></i>
        </section>

        <section id="featured">
            <div className="wrapper">
                <div className="blurb">
                    <h2><strong>Ut enim</strong> ad minim</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <div className="featured"><img src="/img/featured.jpg" alt="Featured" /></div>
            </div>
        </section>

        <section id="three-slide">
            <div className="wrapper">
                <ul className="slider">
                    <li className="front"><img src="/img/three-slide/thumb-1.jpg" /></li>
                    <li className=""><img src="/img/three-slide/thumb-2.jpg" /></li>
                    <li className="back"><img src="/img/three-slide/thumb-3.jpg" /></li>
                    <li className="current"><img src="/img/three-slide/thumb-4.jpg" /></li>
                </ul>
            </div><i className="icon-chevron-thin-left prev"></i><i className="icon-chevron-thin-right next"></i>
        </section>

        <section id="contact">
            <div className="wrapper">
                <div className="blurb">
                    <h2><strong>Say</strong> Hello</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <form>
                    <input type="email" placeholder="Your Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message"></textarea>
                    <input type="submit" value="Send Message" />
                </form>
            </div>
            <p className="copyright">© Apollo 2016</p>
        </section>
    </div>
}