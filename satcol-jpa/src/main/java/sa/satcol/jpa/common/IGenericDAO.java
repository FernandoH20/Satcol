/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package sa.satcol.jpa.common;

import java.util.List;
import javax.persistence.EntityManager;

/**
 *
 * @author victor.flores
 */
public interface IGenericDAO<T> {

    public EntityManager getEntityManager();

    public void setEntityManager(EntityManager entityManager);

    public boolean create(T entity);

    public boolean update(T entity);

    public boolean delete(T entity);

    public List<T> findAll();

    public T findById(int id);
}
