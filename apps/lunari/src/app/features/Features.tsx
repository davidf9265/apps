'use client';
import React from 'react';
import { Breadcrumbs, BreadcrumbItem, DateInput } from '@nextui-org/react';

import { CalendarDate } from '@internationalized/date';

const Features = () => {
  return (
    <div className="loading">
      <DateInput
        label={'Birth date'}
        placeholderValue={new CalendarDate(1995, 11, 6)}
        className="max-w-sm"
      />
    </div>
  );
};

export default Features;
