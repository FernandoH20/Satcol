<%-- 
    Document   : templatemenu
    Created on : 26 oct de 2024, 19:51:04
    Author     : fernando
--%>

<%@tag description="put the tag description here" pageEncoding="UTF-8"%>
<%-- The list of normal or fragment attributes can be specified here: --%>
<%@attribute name="header" fragment="true" %>
<%@attribute name="title" fragment="true" %>
<%@attribute name="footer" fragment="true" %>


<%-- any content can be specified here e.g.: --%>
<!DOCTYPE html>
<html>
    <head>
        <!--<base href="<%=request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath()%>/">-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title><jsp:invoke fragment="title"/></title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="<%=request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath()%>/common/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="<%=request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath()%>/plugins/notifyBar/css/jquery.notifyBar.css" rel="stylesheet" type="text/css"/>
        <link href="<%=request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath()%>/plugins/datetimepicker/css/bootstrap-datetimepicker.min.css" rel="stylesheet" type="text/css"/>
        <link href="<%=request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath()%>/common/css/com.css" rel="stylesheet" type="text/css"/>

        <script src="<%=request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath()%>/common/js/etiquetas.js" type="text/javascript"></script>
        <script src="<%=request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath()%>/plugins/notifyBar/js/jquery.notifyBar.js" type="text/javascript"></script>
        <link href="<%=request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath()%>/plugins/notifyBar/css/jquery.notifyBar.css" rel="stylesheet" type="text/css"/>
        <jsp:invoke fragment="header"/>
        <% String url = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();%>
    </head>
    <body>

        <div class="container-fluid" id="page_content">
            <jsp:doBody/>
        </div>

        <script src="<%=url%>/common/js/jquery-1.12.1.min.js" type="text/javascript"></script>
        <script src="<%=url%>/common/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="<%=url%>/common/js/config.js?ver=2.0" type="text/javascript"></script>
        <script src="<%=url%>/common/js/com.commons.fn.js" type="text/javascript"></script>
        <script src="<%=url%>/common/js/request.js" type="text/javascript"></script>
        <script src="<%=url%>/plugins/serializejson/jquery.serializejson.min.js" type="text/javascript"></script>
        <script src="<%=url%>/plugins/jqueryValidate/jquery.validate.min.js" type="text/javascript"></script>
        <script src="<%=url%>/plugins/moment/moment.js" type="text/javascript"></script>
        <script src="<%=url%>/plugins/moment/es.js" type="text/javascript"></script>
        <script src="<%=url%>/plugins/bootstraptoggle/js/bootstrap-toggle.min.js" type="text/javascript"></script>
        <script src="<%=url%>/plugins/datetimepicker/js/bootstrap-datetimepicker.min.js" type="text/javascript"></script>
        <script src="<%=url%>/plugins/maskinput/jquery.maskedinput.min.js" type="text/javascript"></script>
        <script src="<%=url%>/common/js/uri.js" type="text/javascript"></script>
        <script src="<%=url%>/common/js/validations_helper.js" type="text/javascript"></script>
        <script src="<%=url%>/common/js/translate.js" type="text/javascript"></script>
        <script src="<%=url%>/common/js/genericView.js" type="text/javascript"></script>
        <script src="<%=url%>/common/js/genericPresenter.js" type="text/javascript"></script>
        <script src="<%=url%>/common/js/logManager.js" type="text/javascript"></script>
        <script src="<%=url%>/common/js/init.js" type="text/javascript"></script>
        <script src="<%=url%>/common/js/notify_helper.js" type="text/javascript"></script>  
        <script src="<%=url%>/plugins/notifyBar/js/jquery.notifyBar.js" type="text/javascript"></script>
        <script src="<%=url%>/common/js/module.js" type="text/javascript"></script>
      <!--<script src="<%=url%>/common/js4/script.js" type="text/javascript"></script>-->
        <script src="<%=url%>/common/js/genericTable.js" type="text/javascript"></script>
        <script src="<%=url%>/common/js/format_field.js" type="text/javascript"></script>
        <jsp:invoke fragment="footer"/>
    </body>
</html>    