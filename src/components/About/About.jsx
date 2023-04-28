import { useState } from 'react';
import { useMediaQuery } from 'hooks';

import classes from './About.module.css';

const About = () => {
  const [isBlurred, setIsBlurred] = useState(true);
  const matches = useMediaQuery('768px');

  const showText = () => setIsBlurred(false);

  return (
    <>
      <div className={classes.wrapper}>
        <p className={classes.text}>
          Інтернет-магазин дитячих товарів Бу-Бу - зона комфорту малюків і їх батьків. Наш
          асортимент розроблений в діапазоні "від народження до школи", завдяки чому кожен етап
          розвитку вашої дитини буде максимально правильним, а головне, цікавим і радісним.
        </p>
        <p className={classes.text}>
          Товари для дітей - особлива категорія продукції, тому ми довіряємо тільки перевіреним
          виробникам та брендам, які давно і успішно представлені на світовому ринку. Магазин Бу-Бу
          є дистриб'ютором таких брендів: Anex, X-lander, Leonardo, Bebe Confort, Welldon, Huffy,
          Fun Time, Lexus Trike, Nino, Maltex, Ceba baby, X-rider, Play WOW, Miniland, Casato,
          Klups, Radir, Keenway, Adamex, Roan, Tako.
        </p>

        {(matches || !isBlurred) && (
          <p className={classes.text}>
            На сайті інтернет магазину Бу-Бу ви можете купити товари для дітей абсолютно різних
            категорій, в залежності від потреб: <br /> дитячі коляски, дитяча кімната, стільці і
            шезлонги, все для годування, гігієна та догляд, автокрісла, дитячий транспорт, іграшки,
            дитячий одяг.
          </p>
        )}

        {isBlurred && <div className={classes.overlay}></div>}
      </div>
      {isBlurred && (
        <button className={classes.btn} type="button" onClick={showText}>
          Докладніше
        </button>
      )}
    </>
  );
};

export default About;
