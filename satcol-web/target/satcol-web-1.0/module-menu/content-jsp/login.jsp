<%-- 
    Document   : login
    Created on : 23-ago-2024, 14:56:07
    Author     : victor.flores
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags/" %>
<t:template>
    <jsp:attribute name="header">
        <link href="../../common/css/fileinput/fileinput.min.css" rel="stylesheet" type="text/css"/>  
        <link href="../../common/css/estilos.css" rel="stylesheet" type="text/css">
    </jsp:attribute>
    <jsp:attribute name="footer">  
        <!--        <script src="../../plugins/blockui-master/jquery.blockUI.js" type="text/javascript"></script>
                <script src="../../plugins/fileinput/js/fileinput.min.js" type="text/javascript"></script>
                <script src="../../plugins/fileinput/js/fileinput_locale_es.js" type="text/javascript"></script>-->
        <script src="../../module-menu/view/login-view.js" type="text/javascript"></script>
        <script src="../../module-menu/presenter/login-presenter.js" type="text/javascript"></script>
        <script src="../../module-menu/js/login.js" type="text/javascript"></script>


        <!--<script src="../../plugins/session/jquery.session.js" type="text/javascript"></script>-->
        <!--<script src="../../module-cob/js/preload.js" type="text/javascript"></script>-->  
    </jsp:attribute> 

    <jsp:body>

                <div class="container" id="contenido">
                    <div class="row">
                        <div class="text-center">
                            <img src="../../imagen/logo.png" width="320">
                        </div>
                        <br/>
                        <form action="" method="POST" id="formLogin" class="form-horizontal" role="form">
                            <div class="col-md-12">
                                <div class="form-group has-feedback">
                                    <div class="input-group">
                                        <span class="input-group-addon glyphicon glyphicon-user" title="Usuario"></span>
                                        <input type="text" class="form-control" name="usuario[nombre]" id="login" required="">
                                    </div>
                                </div>
        
                                <div class="form-group has-feedback">
                                    <div class="input-group">
                                        <span class="input-group-addon glyphicon glyphicon-lock" title="Contraseña"></span> 
                                        <input type="password" id="password" class="form-control" name="usuario[password]" autocomplete="off" required="">
                                    </div>
                                </div>   
                                <center>
                                    <div class="form-group">
        
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary btn-raised">Ingresar</button>
                                        </div>
        
                                    </div>
                                </center>
                            </div>
                        </form>
                    </div>
                </div>  
<!--        <div class="container" id="contenido">
            <div class="row justify-content-md-center" >

                <div class="card" style="width: 18rem;">
                    <img src="../../imagen/logo.png" class="card-img-top" alt="..dds.">
                    <div class="card-body">
                        <form action="" method="POST" id="formLogin" class="form-horizontal" role="form">
                            <div class="form-group">
                                                                <label for="exampleInputEmail1">Email address</label>
                                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                <span class="input-group-addon glyphicon glyphicon-user" title="Usuario"></span>
                                <input type="text" class="form-control" name="usuario[nombre]" id="login" required="">
                            </div>
                            <div class="form-group">
                                                                <label for="exampleInputPassword1">Password</label>
                                                                <input type="password" class="form-control" id="exampleInputPassword1">
                                <span class="input-group-addon glyphicon glyphicon-lock" title="Contraseña"></span> 
                                <input type="password" id="password" class="form-control" name="usuario[password]" autocomplete="off" required="">
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary btn-raised">{{Ingresarrrrrrr}}</button>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>-->
    </jsp:body>
</t:template>

