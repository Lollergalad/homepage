import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import classNames from "classnames";

import evosoft_logo from "./evosoft_logo.png";
import mnb_logo from "./mnb_logo.png";
import andrews_logo from "./andrews_logo.png";

import "react-vertical-timeline-component/style.min.css";
import classes from "./Work.module.scss";

const Work = () => {
  return (
    <div className={classes.jobs}>
      <div className={classes.description}>
        <div>
          In my 6+ year technical carrer I have worked with a lot of websites,
          wrote code in the backend and frontend as well, tried to find the best
          solutions and tried to improve myself code by code.
        </div>
      </div>
      <div className={classes.workplaces}>
        <VerticalTimeline className={classes.verticalTimeline} animate={false}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            //contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2016 JULY - 2019 DECEMBER"
            dateClassName={classes.date}
            iconStyle={{ background: "rgb(0 192 245)", color: "aliceblue" }}
            //icon={<WorkIcon />}
          >
            <div
              className={classNames(
                "vertical-timeline-element-title",
                classes.title
              )}
            >
              Web Developer, evosoft
            </div>
            <div
              className={classNames(
                "vertical-timeline-element-subtitle",
                classes.location
              )}
            >
              Miskolc, Hungary
            </div>
            <div className={classes.info}>
              My carrer started at evosoft Hungary Kft. (owned by Siemens) as a
              member of a small team. Our main focus was to create websites for
              engines.
              <div className={classes.imgContainer}>
                <img
                  className={classes.evoLogo}
                  src={evosoft_logo}
                  alt="evosoft_logo"
                />
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 DECEMBER - 2021 SEPTEMBER"
            dateClassName={classes.date}
            iconStyle={{ background: "rgb(0 192 245)", color: "aliceblue" }}
            //icon={<WorkIcon />}
          >
            <div
              className={classNames(
                "vertical-timeline-element-title",
                classes.title
              )}
            >
              Web Developer, MNB
            </div>
            <div
              className={classNames(
                "vertical-timeline-element-subtitle",
                classes.location
              )}
            >
              Budapest, Hungary
            </div>
            <div className={classes.info}>
              I continued my carrer at MNB (Hungarian National Bank), where we
              created websites mostly for internal governmental use.
              <div className={classes.imgContainer}>
                <img
                  className={classes.mnbLogo}
                  src={mnb_logo}
                  alt="mnb_logo"
                />
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 SEPTEMBER - PRESENT"
            dateClassName={classes.date}
            iconStyle={{ background: "rgb(0 192 245)", color: "aliceblue" }}
            //icon={<WorkIcon />}
          >
            <div
              className={classNames(
                "vertical-timeline-element-title",
                classes.title
              )}
            >
              Frontend Developer, Andrews IT Engineering
            </div>
            <div
              className={classNames(
                "vertical-timeline-element-subtitle",
                classes.location
              )}
            >
              Budapest, Hungary
            </div>
            <div className={classes.info}>
              Now I'm working at Andrews IT Engineering. The focus is on a one
              big tender project, where we try to create something new,
              innovative.
              <div className={classes.imgContainer}>
                <img
                  className={classes.andrewsLogo}
                  src={andrews_logo}
                  alt="andrews_logo"
                />
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Work;
