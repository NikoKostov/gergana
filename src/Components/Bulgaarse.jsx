import React, { Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Play from '../Media/play.jpg'
import ReactPlayer from 'react-player'
import Video from '../Media/rickroll.mp4'


class Bulgaarse extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: 'playbtn',
        }
        console.log(this.state.show)
        this.checkDist = this.checkDist.bind(this)
    }
    checkDist() {
          function distance(lon1, lat1, lon2, lat2) {
          var R = 6371; // Radius of the earth in km
          var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
          var dLon = (lon2-lon1).toRad(); 
          var a = Math.sin(dLat/2) * Math.sin(dLat/2) +Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * Math.sin(dLon/2) * Math.sin(dLon/2); 
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
          var d = R * c; // Distance in km
          return d;
        };
      
        /** Converts numeric degrees to radians */
        if (typeof(Number.prototype.toRad) === "undefined") {
          // eslint-disable-next-line no-extend-native
          Number.prototype.toRad = function() {
            return this * Math.PI / 180;
          }
        };
      
        return window.navigator.geolocation.getCurrentPosition((pos) => {
          let dist = distance(pos.coords.longitude, pos.coords.latitude, 25.937163, 41.913741 );
          console.log(Math.floor(dist))
          let roundDist =  Math.floor(dist);
          console.log(this.state.show)
          roundDist < 1 ? this.setState({
              show: 'video'
          }):
          this.setState({
            show: 'error'
          })
        });
      };
 
    render() { 
        return (
            <AnimatePresence exitBeforeEnter>
                
                { this.state.show === 'playbtn' ? 
                    <motion.div className='play'
                    key={this.state.show}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    transition={{ duration: 1 }}
                    whileTap={{ scale: 0.95 }}
                    onTap={ this.checkDist }
                    exit={{ opacity: 0 }}>  
                        <img src={Play} alt= 'Play' />
                    </motion.div>
                : this.state.show === 'video' ?
                <motion.div  
                key={this.state.show}
                initial={{ scale: 0, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1}}
                transition={{ duration: 2 }}  
                exit={{ opacity: 0 }}>
                    <ReactPlayer
                    muted
                    className='react-player'
                    width='100%'
                    height='100%'
                    playing
                    url={Video}
                    config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                    onContextMenu={e => e.preventDefault()}
                    controls
                    />
                </motion.div>
                : <motion.div key={this.state.show}><p>error</p></motion.div>
                }
            </AnimatePresence>
        );
    }
}
 
export default Bulgaarse;
