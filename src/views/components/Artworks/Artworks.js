import React from 'react';
import css from './artworks.module.scss';

export function Artworks() {
  return (
      <section className={css.container}>
        <div className={css.column}>
          <div className="row">content1</div>
          <div className="row">content2</div>
          <div className="row">content3</div>
          <div className="row">content4</div>
          <div className="row">content5</div>
        </div>
        <div  className={css.column}>
          <div className="row">content6</div>
          <div className="row">content7</div>
          <div className="row">content8</div>
          <div className="row">content9</div>
          <div className="row">content10</div>
        </div>
        <div className={css.column}>
          <div className="row">content11</div>
          <div className="row">content12</div>
          <div className="row">content13</div>
          <div className="row">content14</div>
          <div className="row">content15</div>
        </div>
        <div className={css.column}>
          <div className="row">content16</div>
          <div className="row">content17</div>
          <div className="row">content18</div>
          <div className="row">content19</div>
          <div className="row">content20</div>
        </div>
      </section>
  );
}
