/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sa.satcol.jpa.utils;
import java.io.IOException;
import java.util.logging.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.xml.DOMConfigurator;
import org.codehaus.jackson.map.ObjectMapper;
/**
 *
 * @author victor.flores
 */
public class LoggerManager {
      private ObjectMapper objectMapper;

    public enum LogLevel {
        DEBUG, INFO, WARNING, ERROR, FATAL
    };
    private static LoggerManager obj;
    private Logger oLog;

    private LoggerManager() {
        /*
		* Config.xml: file path used to configure log4j
         */
        DOMConfigurator.configure("Config.xml");
    }

    public LoggerManager(Logger logger) {
        this();
        setLogger(logger);
    }

    private void setLogger(Logger _oLog) {
        oLog = _oLog;
    }

    public static LoggerManager getLogger(String name) {
        if (obj == null) {
            obj = new LoggerManager(Logger.getLogger(name));
        }

        return obj;
    }

    public String getMessage(Object object) {
        objectMapper = new ObjectMapper();
        String jsonString = null;
        try {
            if (!(object instanceof LoggerManager)) {
                jsonString = objectMapper.writeValueAsString(object);
            }
        } catch (IOException ex) {
            java.util.logging.Logger.getLogger(LoggerManager.class.getName()).log(Level.SEVERE, null, ex);
        }
        return jsonString;
    }

    public void debug(Object object) {
        oLog.debug(getMessage(object));
    }

    public void debug(Object request, Object response) {
        StringBuilder sb = new StringBuilder();
        sb.append("\n===================================START REQUEST==========================================\n");
        sb.append(getMessage(request));
        sb.append("\n===================================FIN REQUEST==========================================\n");
        sb.append("\n===================================START RESPONSE==========================================\n");
        sb.append(getMessage(response));
        sb.append("\n===================================END RESPONSE==========================================\n");
        oLog.debug(sb.toString());
    }

    public void info(Object object) {
        oLog.info(getMessage(object));
    }

    public void info(Object request, Object response) {
        StringBuilder sb = new StringBuilder();
        sb.append("\n===================================START REQUEST==========================================\n");
        sb.append(getMessage(request));
        sb.append("\n===================================FIN REQUEST==========================================\n");
        sb.append("\n===================================START RESPONSE==========================================\n");
        sb.append(getMessage(response));
        sb.append("\n===================================END RESPONSE==========================================\n");
        oLog.info(sb.toString());
    }

    public void warn(Object object) {
        oLog.warn(getMessage(object));
    }

    public void error(Object object) {
        oLog.error(getMessage(object));
    }

    public void error(Object request, Object response) {
        StringBuilder sb = new StringBuilder();
        sb.append("\n===================================START REQUEST==========================================\n");
        sb.append(getMessage(request));
        sb.append("\n===================================FIN REQUEST==========================================\n");
        sb.append("\n===================================START RESPONSE==========================================\n");
        sb.append(getMessage(response));
        sb.append("\n===================================END RESPONSE==========================================\n");
        oLog.info(sb.toString());
    }

    public void fatal(Object object) {
        oLog.error(getMessage(object));
    }

    public void Log(String _sMsg, LoggerManager.LogLevel _eLogLevel) {
        switch (_eLogLevel) {
            case DEBUG:
                this.debug(getMessage(obj));
                break;
            case INFO:
                this.info(getMessage(obj));
                break;
            case WARNING:
                this.warn(getMessage(obj));
                break;
            case ERROR:
                this.error(getMessage(obj));
                break;
            case FATAL:
                this.fatal(getMessage(obj));
                break;
            default:

        }
    }
}
