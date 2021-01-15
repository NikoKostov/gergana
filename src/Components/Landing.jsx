import React from "react";
import { motion } from "framer-motion";
import Logo from "../Media/41.png";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <motion.div key="page" exit={{ opacity: 0 }} className="page">
        <motion.div
          key="logo"
          className="logo-big"
          animate={{ opacity: 1, rotate: 360, scale: 2.1 }}
          transition={{ duration: 4 }}
        >
          <img src={Logo} alt="БЗХ" />
        </motion.div>
        <motion.div
          className="titel"
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <h1>Изворът на Белоногата</h1>
        </motion.div>
        <motion.div
          className="buttons"
          initial={{ bottom: -300 }}
          animate={{ bottom: 100 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <motion.div
            className="buttonBG"
            whileTap={{ scale: 0.95 }}
            onTap={this.props.handlerbg}
          >
            <button className="toVideo">Към видеото</button>
          </motion.div>
        </motion.div>
        <motion.div
          className="copyright"
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 3 }}
        >
          <p>Създадено от "Бизнесът за Харманли" 2020</p>
        </motion.div>
      </motion.div>
    );
  }
}

export default Landing;
