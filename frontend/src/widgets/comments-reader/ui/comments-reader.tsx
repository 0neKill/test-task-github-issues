import type { FC } from 'react';
import { clsx } from 'clsx';
import { IssueCard } from '@/entities/issue';

type CommentsReaderProps = FC<{
   className?: string,
}>


export const CommentsReader: CommentsReaderProps = ({ className }) => {
   return (
      <div className={clsx('issue-reader', className)}>
         <IssueCard  issue={{
            id: '123',
            number: 1,
            title: 'Bug: Re-rendering dynamically nested createElement() unmounts childrenBug: Re-rendering dynamically nested createElement() unmounts childrenBug: Re-rendering dynamically nested createElement() unmounts childrenBug: Re-rendering dynamically nested createElement() unmounts children',
            body: "When creating a dynamically created Component with nested createElement() calls, re-rendering causes the whole children tree to unmount and re-mount again.\r\n\r\nReact version: **18.3.0-canary-ade82b8dd-20230816** (most recent canary, as of the time of writing)\r\n\r\n## Steps To Reproduce\r\n\r\n1. Create a dynamically created component, by nesting createElement:\r\n   ```javascript\r\n   const DynamicComponent = createElement(() => createElement(Demo));\r\n   ```\r\n2. Use `<DynamicComponent />` as children\r\n   ```javascript\r\n   return createElement(\"button\", null, DynamicComponent);\r\n   ``` \r\n3. Re-render the component with said children.\r\n\r\nLink **Make sure to open your console**: https://www.jaggli.com/react-mount-unmount-anomaly.html\r\nExample Source: https://github.com/jaggli/jaggli.github.io/blob/master/react-mount-unmount-anomaly.html\r\n\r\nThe relevant parts\r\n```javascript\r\nconst { createRoot } = ReactDOM;\r\nconst { createElement, useEffect, useState } = React;\r\n\r\nconst App = () => {\r\n  const [renderAmount, setRenderAmount] = useState(1);\r\n\r\n  // 🪲 this is where the bug happens 🪲\r\n  // every re-render returns a new function inside the inner createElement\r\n  const DynamicComponent = createElement(() => createElement(Demo));\r\n\r\n  return createElement(\r\n    \"button\",\r\n    // button onChange increases the state and trigger a re-render of the App\r\n    { onClick: () => setRenderAmount(renderAmount + 1) },\r\n    DynamicComponent\r\n  );\r\n};\r\n\r\n// Component for logging into console on mount and unmount\r\nconst Demo = () => {\r\n  useEffect(() => {\r\n    console.log(new Date().toLocaleTimeString(), \"Did mount\");\r\n    return () =>\r\n      console.log(\r\n        new Date().toLocaleTimeString(),\r\n        \"Did unmount\\n---\"\r\n      );\r\n  }, []);\r\n  return \"Click to change state (check the console)\";\r\n};\r\n```\r\n\r\n\r\n## The current behavior\r\nWhen re-rendering `<App />` (above), the children of `<DynamicComponent />` get unmounted and re-mounted. \r\n\r\n## The expected behavior\r\nWhen re-rendering `<App />`, children should stay mounted.",
            user: {
               id: 'asd',
               avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1',
               login: 'asdasd',
            },
            state: 'open',
            comments: 1,
            createdAt: 'asdasd',
            updatedAt: 'asd',
            closedAt: 'asdasd',
         }}/>
      </div>
   );
};