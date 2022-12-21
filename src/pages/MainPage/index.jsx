import React from "react";
import LibraryBooks from "../../assets/images/library-books.jpg";
import LibraryFuture from "../../assets/images/future-library.jpg";

const MainPage = () => {
  return (
    <section>
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="mx-auto max-w-lg">
          <h1 className="text-3xl font-bold text-sage-green">
            Welcome to the library of the future
          </h1>
          <p className="mt-6 text-sage-green">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            similique obcaecati illum mollitia.
          </p>
          <p className="mt-3 text-sm text-sage-green">
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <img
            className="h-96 w-full rounded-xl object-cover lg:w-4/5"
            src={LibraryBooks}
          />
        </div>

        <div>
          <p className="mt-6 text-sage-green">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            fugit odio alias optio molestiae minus sapiente iure, nostrum sit
            vitae, explicabo repudiandae atque error delectus natus, corrupti
            voluptatibus molestias. Esse autem cupiditate nihil sint beatae
            eligendi quae quis officiis quam aut, in accusantium, officia,
            quidem neque eaque necessitatibus illum praesentium ratione? Odit
            molestiae pariatur, molestias rerum excepturi neque, optio incidunt
            nesciunt ducimus omnis iste mollitia labore nulla, tempora hic ut
            beatae delectus deserunt autem ullam tempore. Ad itaque dolor,
            asperiores atque error eius perferendis labore temporibus
            accusantium at placeat! Laborum quam molestias exercitationem ullam
            ratione! Iusto cum cumque vel suscipit ad libero animi deserunt modi
            et error rem fugit fuga iure, odio atque temporibus voluptatum
            facilis, provident esse molestias voluptatibus repudiandae possimus
            soluta. Adipisci, iusto. Autem, fuga excepturi! Facilis recusandae
            temporibus illo! Exercitationem inventore accusantium eius cum
            voluptatem. Numquam ratione consequatur accusantium veniam harum
            sunt, in voluptatum eos nemo itaque?
          </p>
          <p className="mt-3 text-sm text-sage-green">
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <img
            className="h-96 w-full rounded-xl object-cover lg:w-4/5"
            src={LibraryFuture}
          />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
