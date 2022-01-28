import React from 'react';
import Card, { CardVariant } from '../components/Card';
import EventsExample from '../components/EventsExample';

function HomePage() {
  return (
    <div>
      <EventsExample />
      <Card
        variant={CardVariant.outlined}
        width='300px'
        height='200px'
        onClick={(num) => console.log('click, count: ', num)}
      >
        <button>Click</button>
      </Card>
      <hr />
    </div>
  );
}

export default HomePage;
