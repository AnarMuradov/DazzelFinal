import React, { useEffect, useState } from "react";
import "./style.scss";
const FetchSection = () => {
  const [api, setApi] = useState([]);
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

  return (
    <section className="fetchSection">
      <div className="fetchSection__container">
        <div className="fetchSection__container__allData">
          {api.map((x) => {
            return (
              <div
                key={x._id}
                className="fetchSection__container__allData__card"
              >
                <div className="fetchSection__container__allData__card__title">
                  <div className="fetchSection__container__allData__card__title__name">
                    {x.title}
                  </div>

                  <div className="fetchSection__container__allData__card__title__date">
                    <span>
                      <i class="fa-regular fa-calendar-days"></i>
                      {x.createdAt.slice(0, 10)}
                    </span>
                    <span>
                      <i class="fa-regular fa-folder-open"></i>
                      {x.file}
                    </span>
                  </div>
                </div>

                <div className="fetchSection__container__allData__card__content">
                  <img src={x.img} alt="" />
                  <div className="fetchSection__container__allData__card__content__text">
                    {x.text}
                    <div className="fetchSection__container__allData__card__content__text__btn">
                      <button>Continue reading</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <button className="fetchSection__container__allData__btn">
            Older posts
          </button>
        </div>
        <div className="fetchSection__container__popularData">
          <div className="fetchSection__container__popularData__search">
            <input placeholder="Search..." type="text" value={search} onChange={e=>setSearch(e.target.value)}/>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="fetchSection__container__popularData__cardBox">
            <div className="fetchSection__container__popularData__cardBox__items">
              <span>POPULAR</span>
              <span>RECENT</span>
              <i class="fa-solid fa-comments"></i>
            </div>
            <div className="fetchSection__container__popularData__cardBox__allCards">
              {api
              .filter(x=>x.title.toLowerCase().includes(search.toLowerCase()) )
              .map((x) => {
                return (
                  <div
                    key={x._id}
                    className="fetchSection__container__popularData__cardBox__allCards__card"
                  >
                    <div className="fetchSection__container__popularData__cardBox__allCards__card__img">
                      <img src={x.img} alt="" />
                    </div>
                    <div className="fetchSection__container__popularData__cardBox__allCards__card__content">
                      <div className="fetchSection__container__popularData__cardBox__allCards__card__content__title">
                        {x.title}
                      </div>
                      <div className="fetchSection__container__popularData__cardBox__allCards__card__content__date">
                        {x.createdAt.slice(0, 10)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="fetchSection__container__popularData__comments">
            Recent Comments
          </div>
        </div>
      </div>
    </section>
  );
};

export default FetchSection;
