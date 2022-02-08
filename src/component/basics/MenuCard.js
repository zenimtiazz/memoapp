import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--container">
        {menuData.map((currElem) => {
          //for the map function in paranthesis you can give any name
          const { id, name, category, image, description } = currElem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle=">
                      {id}
                    </span>
                    <span className="card-author">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-tag" subtle>
                    Order Now
                  </span>
                </div>
              </div>
            </>
          );
        })}
        ;
      </section>
    </>
  );
};

export default MenuCard;
