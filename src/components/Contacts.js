export const Contacts = () => {
    return <div>
       <section id="contact" className="banner">
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