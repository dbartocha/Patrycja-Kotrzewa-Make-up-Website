import React from 'react';
import '../sass/footer.css'


class Footer extends React.Component {
    render() {
        return (
            <div className="mainFooter">
                <div className="footer">
                    <div> Strona stworzona przez Dawida Bartocha</div>
                    <div>Kontakt:</div>
                    <div>Telefon: 660989500</div>
                    <div>Adres e-mail : dawid.bartocha1997@gmail.com</div>
                    <div className="info">Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Back">Back</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"     title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                </div>
            </div>
        )
    }
}


export default Footer;