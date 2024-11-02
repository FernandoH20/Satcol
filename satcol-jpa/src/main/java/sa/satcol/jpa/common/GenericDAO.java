/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sa.satcol.jpa.common;

import java.lang.reflect.ParameterizedType;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.UserTransaction;

/**
 *
 * @author victor.flores
 */
public abstract class GenericDAO<T> implements IGenericDAO<T> {

    InitialContext ic;
    public UserTransaction userTransaction;
    protected Class<T> type;
    protected String entity;
    boolean status = false;
    protected EntityManager entityManager;

    @Override
    public EntityManager getEntityManager() {
        return entityManager;
    }

    @Override
    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public GenericDAO() {
        super();
        try {
            ic = new InitialContext();
            System.out.println("xxxxxxxxxxx");
            userTransaction = (UserTransaction) ic.lookup("java:comp/UserTransaction");
            this.type = (Class<T>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
        } catch (NamingException ex) {
            Logger.getLogger(GenericDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public Class<T> getType() {
        return type;
    }

    public void setType(Class<T> type) {
        this.type = type;
    }

    @SuppressWarnings("unchecked")
    public String getEntityName() {
        if (entity == null) {
            Entity entityAnn = (Entity) type.getAnnotation(Entity.class);

            if (entityAnn != null && !entityAnn.name().equals("")) {
                entity = entityAnn.name();
            } else {
                entity = type.getSimpleName();
            }
        }

        return entity;
    }

    @Override
    public boolean create(T entity) {
        try {
            entityManager.persist(entity);
            status = true;
        } catch (Exception e) {
            status = false;
            throw e;
        }
        return status;
    }

    @Override
    public boolean update(T entity) {
        // TODO Auto-generated method stub

        try {
            entityManager.merge(entity);
            entityManager.flush();
            status = true;
        } catch (Exception e) {
            status = false;
            throw e;
        }
        return status;
    }

    @Override
    public boolean delete(T entity) {
        try {
            T entityMerge = entityManager.merge(entity);
            entityManager.remove(entityMerge);
            status = true;
        } catch (Exception e) {
            status = false;
            throw e;
        }
        return status;
    }

    @Override
    public List<T> findAll() {
        List<T> list = null;
        try {
            Query query = entityManager.createQuery(" SELECT o FROM " + getEntityName() + " o");
            list = query.getResultList();
        } catch (Exception e) {
            e.getMessage();
        } finally {
        }
        return list;
    }

    @Override
    public T findById(int id) {
        T entity;
        entity = (T) entityManager.find(getType(), id);
        return entity;
    }
}
