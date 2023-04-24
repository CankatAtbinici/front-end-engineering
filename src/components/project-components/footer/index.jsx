import React from 'react';

function index(props) {
    return (
        <footer
        className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left max-h-30 w-full fixed bottom-0 ">
        <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
          Basic Footer :
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="/"
            > Front End Case</a>
        </div>
      </footer>
    );
}

export default index;