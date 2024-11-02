<%-- 
    Document   : menu
    Created on : 26 oct de 2024, 19:49:05
    Author     : fernando
--%>


<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags/" %>
<t:templatemenu>
    <jsp:attribute name="header">
        <!--        <link href="../../common/css/fileinput/fileinput.min.css" rel="stylesheet" type="text/css"/>  
                <link href="../../common/css/estilos.css" rel="stylesheet" type="text/css">-->
    </jsp:attribute>
    <jsp:attribute name="footer">  
<!--        <script src="../../module-usuario/view/menuPresentacion-view.js" type="text/javascript"></script>
        <script src="../../module-usuario/presenter/menuPresentacion-presenter.js" type="text/javascript"></script>
        <script src="../../module-usuario/js/menuPresentacion.js" type="text/javascript"></script>-->
    </jsp:attribute> 

    <jsp:body>

        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!--<a class="navbar-brand" href="#">Brand</a>-->
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="../../module-menu/content-jsp/cliente.jsp" target="micontenedor">Cliente <span class="sr-only">(current)</span></a></li>
                        <li><a href="../../module-menu/content-jsp/usuario.jsp" target="micontenedor">Usuario</a></li>
                        <li><a href="../../module-menu/content-jsp/tiposervicio.jsp" target="micontenedor">Tipo servicio</a></li>
                        <li><a href="../../module-menu/content-jsp/contratoservicio.jsp" target="micontenedor">Registro de contrato</a></li>

                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Usuario  <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="../../module-menu/content-jsp/login.jsp">Salir</a></li>
<!--                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Separated link</a></li>-->
                            </ul>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" name="micontenedor"   allowfullscreen></iframe>
        </div>
    </jsp:body>
</t:templatemenu>