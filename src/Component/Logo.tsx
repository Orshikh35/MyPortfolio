"use client";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="marquee-container flex flex-col gap-5 my-[15em]">
    <div className="marquee__box">
      <ul className="marquee__item-1">
        <li>Directrice Artistique</li>
        <li>Webdesign</li>
        <li>Print</li>
        <li>Illustration</li>
        <li>Création d'identité</li>
      </ul>
      <ul className="marquee__item-1">
        <li>Directrice Artistique</li>
        <li>Webdesign</li>
        <li>Print</li>
        <li>Illustration</li>
        <li>Création d'identité</li>
      </ul>
    </div>
    <div className="marquee__box">
      <ul className="marquee__item-2">
        <li>UI design</li>
        <li>UX design</li>
        <li>Motion design</li>
        <li>Interactiv design</li>
      </ul>
      <ul className="marquee__item-2">
        <li>UI design</li>
        <li>UX design</li>
        <li>Motion design</li>
        <li>Interactiv design</li>
      </ul>
    </div>
  </div>
  );
}
