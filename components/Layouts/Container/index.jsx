import React, { Fragment, useState, useEffect, useCallback } from "react";
import _ from "lodash";
import ReactDOM from "react-dom";
import _Navigator from "../../Tools/_Navigator";

const Container = props => {
  const { children } = props;
  const [pages, setPages] = useState([]);
  const renderPage = useCallback(
    (ts, page) => {
      const params = {
        ts,
        page
      };
      const _pages = [...pages, params];
      setPages(_pages);
    },
    [pages]
  );

  const removePage = useCallback(
    ts => {
      const _pages = _.filter(pages, pageData => !_.isEqual(pageData.ts, ts));
      setPages(_pages);
    },
    [pages]
  );

  useEffect(() => {
    _Navigator.renderPage = renderPage;
    _Navigator.removePage = removePage;
  }, [renderPage, removePage]);

  return (
    <div className="app-container">
      {children}
      {_.map(pages, pageData => {
        return <Fragment key={pageData.ts}>{ReactDOM.createPortal(pageData.page, document.body)}</Fragment>;
      })}
    </div>
  );
};

export default Container;
