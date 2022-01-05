import React from "react";
import Nav from "../../components/nav/Nav";
import "./Favorites.css";

// import { Container } from "../../components/styles/Container.styled";
// import CardItem from "../../components/cards/CardItem";
// import { Flex } from "../../components/styles/Flex.styled";

export default function Favorite() {
    // const favoriteObjs = JSON.parse(localStorage.getItem("exercises"));
  return (
    <div className="favorites-page">
        <Nav />
      {/* {favoriteObjs && (
        <Container>
          <Flex>
            {favoriteObjs.map((favorite) => {
              return (
                <CardItem
                  key={favorite.id}
                  title={favorite.name}
                  image={favorite.female.image}
                  id={favorite.id}
                  obj={favorite}
                />
              );
            })}
          </Flex>
        </Container>
      )} */}
    </div>
  );
}
