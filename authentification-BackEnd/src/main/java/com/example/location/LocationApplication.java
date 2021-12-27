package com.example.location;

import com.example.location.DAO.IClient;
import com.example.location.DAO.IVehicule;
import com.example.location.DAO.ICategory;
import com.example.location.entities.Client;
import com.example.location.entities.Vehicule;
import com.example.location.entities.Category;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import net.bytebuddy.utility.RandomString;

import java.util.Random;

@SpringBootApplication
public class LocationApplication implements CommandLineRunner {
    @Autowired
    private IVehicule iVehicule;
    @Autowired
    private ICategory iCategory;
    @Autowired
    private IClient iClient;
    @Autowired
    private RepositoryRestConfiguration repositoryRestConfiguration;

    public static void main(String[] args) {
        SpringApplication.run(LocationApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        repositoryRestConfiguration.exposeIdsFor(Vehicule.class, Category.class, Client.class);

        //Clients de depart
        Client client1= new Client("Chaoub","Rayane","rayane@gmail.com","MTIz","ADMIN");
        Client client2=new Client("Marah","Abdel","marah@gmail.com","MTIz","ADMIN");
        iClient.save(client1);
        iClient.save(client2);
        iClient.save(new Client("ElAlaoui","Rachid","rachid@gmail.com","MTIz"));
        iClient.save(new Client("Rehaily","Rida","rida@gmail.com","MTIz"));

        //Categories
        iCategory.save(new Category(null,"Citadine",null,null,null));
        iCategory.save(new Category(null,"Utilitaire",null,null,null));
        iCategory.save(new Category(null,"Sport",null,null,null));
        iCategory.save(new Category(null,"Voiturette",null,null,null));

        //Vehicules
        Random rnd=new Random();
        iCategory.findAll().forEach(c->{
            for (int i = 0; i <3 ; i++) {
                Vehicule v=new Vehicule();
                v.setMarque(RandomString.make(6));
                v.setEnergie(RandomString.make(6));
                v.setNbPlaces(6);
                v.setKilometrage(10000+rnd.nextInt(200000));
                v.setBoiteAvitesse("Manuelle");
                v.setCurrentPrice(20+rnd.nextInt(500));
                v.setAvailable(rnd.nextBoolean());
                v.setPromotion(rnd.nextBoolean());
                v.setCategory(c);
                v.setClient(client2);
                v.setPhotoName("unknown.png");
                iVehicule.save(v);
            }
        });
    }




}
