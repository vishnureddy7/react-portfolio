import React, {Component} from "react";

class Footer extends Component {
    render() {
        let networks = this.props.sharedBasicInfo.social;

        return (
            <footer>
                <div className="col-md-12">
                    <div className="social-links">
                        {networks.map(function (network) {
                            return (
                                <span key={network.name} className="m-4">
                                    <a href={network.url} target="_blank" rel="noopener noreferrer">
                                        <i className={network.class}/>
                                    </a>
                                </span>
                            )
                        })}
                    </div>
                    <div className="copyright py-4 text-center">
                        <div className="container">
                            <small>
                                Copyright &copy;&nbsp; {this.props.sharedBasicInfo.name}
                            </small>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
