import React, { useState } from 'react';

function QuestionBlock({ q, description }) {

  return (
    <details class="w-full border rounded-lg bg-white">
        <summary class="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">{q}</summary>
        <p class="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">{description} </p>
    </details> )
}

export default QuestionBlock;
