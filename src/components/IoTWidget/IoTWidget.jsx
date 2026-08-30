import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaThermometerHalf, FaLightbulb, FaMicrochip, FaServer } from 'react-icons/fa';
import './IoTWidget.css';

const IoTWidget = () => {
  const [temperature, setTemperature] = useState(24.5);
  const [cpuUsage, setCpuUsage] = useState(45);
  const [lampOn, setLampOn] = useState(true);
  const [networkPing, setNetworkPing] = useState(12);

  // Simulate live data fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(prev => {
        const numPrev = parseFloat(prev);
        return parseFloat((numPrev + (Math.random() * 0.4 - 0.2)).toFixed(1));
      });
      setCpuUsage(Math.floor(Math.random() * 60) + 20); // fluctuate between 20 and 80
      setNetworkPing(Math.floor(Math.random() * 15) + 10); // 10 to 25ms
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="iot-widget glass-card neon-border"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="iot-header">
        <div className="status-dot pulsing"></div>
        <h4>Live Setup Status</h4>
        <span className="iot-badge">ESP32 Sync</span>
      </div>
      
      <div className="iot-grid">
        <div className="iot-stat-box">
          <FaThermometerHalf className="iot-icon temp" />
          <div className="iot-stat-info">
            <span className="iot-label">Room Temp</span>
            <span className="iot-value">{temperature}°C</span>
          </div>
        </div>

        <div className="iot-stat-box">
          <FaMicrochip className="iot-icon cpu" />
          <div className="iot-stat-info">
            <span className="iot-label">CPU Load</span>
            <span className="iot-value">{cpuUsage}%</span>
          </div>
          <div className="iot-progress-bar">
            <div className="iot-progress-fill" style={{ width: `${cpuUsage}%` }}></div>
          </div>
        </div>

        <div className="iot-stat-box" onClick={() => setLampOn(!lampOn)} style={{ cursor: 'pointer' }}>
          <FaLightbulb className={`iot-icon ${lampOn ? 'lamp-on' : 'lamp-off'}`} />
          <div className="iot-stat-info">
            <span className="iot-label">Desk Lamp</span>
            <span className="iot-value">{lampOn ? 'ON' : 'OFF'}</span>
          </div>
        </div>

        <div className="iot-stat-box">
          <FaServer className="iot-icon network" />
          <div className="iot-stat-info">
            <span className="iot-label">Ping</span>
            <span className="iot-value">{networkPing}ms</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IoTWidget;
