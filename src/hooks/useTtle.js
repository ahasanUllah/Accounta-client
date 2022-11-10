const { useEffect } = require('react');

const useTitle = (title) => {
   useEffect(() => {
      document.title = `Accounta - ${title}`;
   }, [title]);
};
export default useTitle;
