
<div class="modal fade bd-example-modal-lg" id="modalBuscar" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
    <div class="modal-dialog modal-lg">  
        <div class="modal-content">
            <form action="" method="POST" id="formBuscar" class="form-horizontal" role="form">
                <div class="modal-header">
                    <h4 class="modal-title" id="TituloLabelSolicitud">{{buscarConsumidor}}</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="col-md-8">
                                    <div class="input-group">
                                        <input  type="text" placeHolder="Nro. Consumidor, Razon Social, Nro.Documento,Dirección" name="searchText" class="form-control sett"  >
                                        <span class="input-group-btn">
                                            <button type="submit" title="{{buscar}}" class="btn btn-default"><span class='glyphicon glyphicon-search'></span></button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-primary" id="nucConsumidorList">
                        <div class="panel-heading">
                            {{lista}}
                        </div>
                        <br />
                        <div class="panel-body table-responsive">
                            <table id="tablecliente"  class='table table-hover table-striped no-footer' cellspacing='0' width='100%'>
                                <thead>
                                    <tr>
                                        <th data-field="id">{{id}}</th>                                     
                                        <th data-field="nombre">{{nombre}}</th>
                                        <th data-field="apellido">{{apellido}}</th>
                                        <th data-field="ci">{{ci}}</th>
                                        <th data-field="celular">{{celular}}</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </form>
            <form action="" method="POST" id="formCatch" class="form-horizontal" role="form">
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" onclick= "presenterModalBuscar.closeModal();">{{cancelar}}</button>                  
                    <button type="submit" class="btn btn-primary next" >{{confirmar}}</button>
                </div>
            </form>
        </div>
    </div>
</div>