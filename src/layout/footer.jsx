export default function Footer() {
    return <footer className="page-footer green darken-1">
                <div className="footer-copyright">
                    <div className="container">
                    © {new Date().getFullYear()}
                        <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
                    </div>
                </div>
            </footer>
}      