<%-- 
    Document   : contratoservicio
    Created on : 29 oct. 2024, 23:20:34
    Author     : crifor
--%>


<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags/" %>
<t:template>
    <jsp:attribute name="header">
        <!--        <link href="../../common/css/fileinput/fileinput.min.css" rel="stylesheet" type="text/css"/>  
                <link href="../../common/css/estilos.css" rel="stylesheet" type="text/css">-->
    </jsp:attribute>
    <jsp:attribute name="footer">  
        <!--<script src="../../plugins/session/jquery.session.js" type="text/javascript"></script>-->
        <!--<script src="../../common/js/constantes.js" type="text/javascript"></script>-->
        <!--<script src="../../module-cob/js/dataServer.js" type="text/javascript"></script>-->
        <!--<script src="../../plugins/blockui-master/jquery.blockUI.js" type="text/javascript"></script>-->     

        <script src="../../module-menu/view/contratoservicio-view.js" type="text/javascript"></script>
        <script src="../../module-menu/presenter/contratoservicio-presenter.js" type="text/javascript"></script>
        <script src="../../module-menu/js/contratoservicio.js" type="text/javascript"></script>

        <script src="../../module-menu/view/search-cliente-view.js?${initParam.buildtimestamp}" type="text/javascript"></script>
        <script src="../../module-menu/presenter/search-cliente-presenter.js?${initParam.buildtimestamp}" type="text/javascript"></script>
        <script src="../../module-menu/js/search-cliente.js?${initParam.buildtimestamp}" type="text/javascript"></script>



    </jsp:attribute> 

    <jsp:body>
        <div id="containercontratoservicio">
            <div class="container-fluid" >
                <div class="col-md-12" id="filtercontratoservicio" >
                    <h4 class="panel-title filter-title" data-toggle="collapse" href="#collapse1">
                        <h3>Contrato servicio</h3>
                        <div class="panel panel-info">
                            <div class="panel-heading">
                                <h4 class="panel-title filter-title" data-toggle="collapse" href="#collapse1">
                                    Filtrar por Tipo <span class="findBy"></span>  <span class="caret"></span>
                                </h4>             
                                <div class="clearfix"></div>
                            </div>
                            <div id="collapse1" class="panel-collapse collapse" aria-expanded="false">
                                <div class="panel-body">
                                    <form action="" method="POST" id="formFilter" class="form-horizontal" role="form">
                                        <div class="col-md-3">
                                            <div class="form-group has-feedback">
                                                <label for="tiposervicio[nombretipo]" class="col-md-4 control-label">Nombre:</label>
                                                <div class="col-md-6">
                                                    <input  name="tiposervicio[nombretipo]" class="form-control">
                                                </div>
                                            </div>  
                                        </div>  
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <div class="text-right">
                                                    <button type="reset" class="btn btn-default">{{reset}}</button>
                                                    <button type="submit" class="btn btn-primary btn-raised">{{buscar}}</button>
                                                </div>
                                            </div>
                                        </div> 

                                    </form>
                                </div>
                            </div>
                        </div>
                </div>

                <div class="col-md-12" id="toolBarLote" >
                    <div class="panel panel-default">   
                        <div class="panel-heading"> 
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group btn-group-sm " role="group" aria-label="First group"> 
                                    <a href="#" title="Crear" class="btn btn-default glyphicon glyphicon-plus" onclick="modalPresenter.openCreate();"></a>
                                    <a href="#" title="Editar" class="btn btn-default glyphicon glyphicon-pencil" onclick="modalPresenter.openEdit();"></a>
                                    <a href="#" title="Importar" class="btn btn-default glyphicon glyphicon-trash" onclick="modalPresenter.delete();"></a>
                                    <!--<a href="#" title="Actualizar" class="btn btn-default glyphicon glyphicon-floppy-disk" onclick="modalPresenter.actualizar();"> Actualizar</a>-->

                                </div>   
                            </div>
                            <div class="clearfix"></div>
                        </div>        
                    </div> 
                </div>

                <div class="col-md-12" id="tablecontratoservicio">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title pull-left">Listado</h3>
                            <a href="#search" class="btn-sm pull-right glyphicon glyphicon-refresh" onclick="filterPresenter.refrescar();"></a>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                            <div id="table_content">     
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <div class="modal fade" id="modalContratoservicio" role="dialog" aria-labelledby="modal" data-keyboard="false" data-backdrop="static">
            <div class="modal-dialog modal-lg" role="asignacion">
                <div class="modal-content">
                    <form action="" method="POST" id="formContratoservicio" class="form-horizontal" role="form" >
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="modal">Contrato servicio</h4>
                        </div>
                        <div class="modal-body">
                            <div class="row">

                                <div class="col-md-6"> 
                                    <div class="form-group has-feedback">
                                        <label for="cliente[nombre]" class="col-sm-4 control-label">Nombre:</label>
                                        <div class="col-sm-8">      
                                            <div class="input-group">
                                                <input type="text" name="cliente[nombre]" class="form-control" value="" />
                                                <!--<input type="text" name="cobconsumidor[consumidor]" class="form-control" autocomplete="off" value="" autofocus="on" tabindex="1" id="tabindexCodigo" required/>-->
                                                <span class="input-group-btn">
                                                    <button class="btn btn-default" id="btnNroConsumidor" type="button" onclick="modalPresenter.getConsumidor();"><span class="glyphicon glyphicon-search"></span></button>
                                                </span>
                                            </div>

                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12"> 
                                    <div class="form-group has-feedback">
                                        <label for="contratoserviciodetalle[observacion]" class="col-sm-2 control-label">Observación:</label>
                                        <div class="col-sm-8">                            
                                            <input name="contratoserviciodetalle[observacion]" class="form-control" ></select>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <!--                                <div class="col-md-5"> 
                                                                <div class="form-group has-feedback">
                                                                    <label for="tiposervicio[id]" class="col-sm-4 control-label">Servicio:</label>
                                                                    <div class="col-sm-8">                            
                                                                        <select name="tiposervicio[id]" class="form-control" ></select>
                                                                    </div>
                                                                </div> 
                                                            </div>-->
                            <!--                                <div class="col-md-5"> 
                                                                <div class="form-group has-feedback">
                                                                    <label for="tiposervicio[precio]" class="col-sm-4 control-label">Precio:</label>
                                                                    <div class="col-sm-8">                            
                                                                        <input type="text" name="tiposervicio[precio]" class="form-control" value="" />
                                                                    </div>
                                                                </div> 
                                                            </div>-->
                            <!--                                <div class="col-md-2"> 
                                                                <div class="form-group has-feedback">
                            
                                                                    <div class="col-sm-5">                            
                                                                        <a href="#" title="Reaperturar" class="btn btn-primary glyphicon glyphicon-plus" onclick="modalPresenter.createcontrato();"></a>
                                                                    </div>
                                                                </div> 
                                                            </div>-->
                            <!--</div>-->
                            <div id="groupCobrosDetallec">    
                                <div class="panel-group">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" href="#collapseDet10">Registro de servicio </a>
                                            </h4>
                                        </div>
                                        <div id="collapseDet10" class="panel-collapse collapse in" aria-expanded="true">
                                            <div class="panel-body table-responsive">
                                                <div id="table_content1">     
                                                </div>
                                                <!--                                                <table id="tblConsulta"  class='table table-hover table-striped no-footer' cellspacing='0' width='100%'>
                                                                                                    <thead>
                                                                                                        <tr>
                                                                                                            <th data-field="id">{{id}}</th>                                     
                                                                                                            <th data-field="servicios">N° de servicios</th>
                                                                                                            <th data-field="Servicio">Servicio</th>
                                                                                                            <th data-field="Precio">Precio</th>
                                                                                                        </tr>
                                                                                                    </thead>
                                                                                                </table>-->
                                            </div>
                                            <!--                                            <div class="panel-body">
                                                                                            <div id="table_contentreg">     
                                                                                            </div>-->
                                            <!--                                                <table class="table table-hover">
                                                                                                <thead id="titulos">
                                                                                                </thead>
                                                                                                <tbody id="groupCobrosDetalle">   
                                                                                                </tbody>
                                                                                            </table>
                                                                                            <div class="text-right">
                                                                                                <b>Deuda seleccionada:</b> <span id="totalConsumidorSeleccionado">0,00</span> Bs.
                                                                                                <input type="hidden" name="cobCobranzaResumen[pagado]" >
                                                                                            </div>-->
                                            <!--</div>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <!--<input type="hidden" name="contratoservicio[id]" value="">-->
                            <input type="hidden" name="cliente[id]" value="">
                            <button type="button" class="btn btn-default btn-raised" data-dismiss="modal">{{cerrar}}</button>
                            <button type="submit" class="btn btn-primary btn-raised">{{guardar}}</button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
        <%@ include file="search-cliente.jsp" %>
    </jsp:body>
</t:template>
