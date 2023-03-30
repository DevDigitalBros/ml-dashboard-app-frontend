/* eslint-disable no-regex-spaces */
/* eslint-disable react-hooks/exhaustive-deps */
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useEffect, useState, useMemo } from 'react';
import React from 'react';
import ApplicationsCard from './Applications';
import { DashboardContainer, DashboardHeader, DashboardHeading } from './Dashboard.style';
import { getData } from '../../utils/GetPremierLeaguData'
import { useDispatch } from 'react-redux';
import { setselectpremierLeagueData } from '../../store/appSlice';
import MultiAxisDemo from './PremierLeagueData/DemoChart';
import LineStylesDemo from './PremierLeagueData/DemoChart2';
import RadarDemo from './PremierLeagueData/DemoChart3';
import PolarAreaDemo from './PremierLeagueData/DemoChart4';
import ComboDemo from './PremierLeagueData/DemoChart5';
const ResponsiveGridLayout = WidthProvider(Responsive);

interface MasterAdmin {
  chartOne: React.ReactNode;
  chartTwo: React.ReactNode;
  chartThree: React.ReactNode;
  chartFour: React.ReactNode;
  chartFive: React.ReactNode;
  chartSix?: React.ReactNode;
}


interface DashboardGridInterface {
  master_admin: MasterAdmin;
}

export interface RoleKeys {
  '610a0f1dc61edfcf62d62bb1': string;
}

export const roles = {
  '610a0f1dc61edfcf62d62bb1': 'master_admin',
};

const Dashboard = () => {

  const [data, setData] = useState<any>([]);
  const dispatch = useDispatch();

  const [layout, setLayout] = useState<Array<any>>([
    { i: "chartOne", x: 0, y: 0, w: 4, h: 9 },
    { i: "chartTwo", x: 4, y: 0, w: 4, h: 9 },
    { i: "chartThree", x: 8, y: 0, w: 4, h: 9 },
    { i: "chartFour", x: 0, y: 1, w: 4, h: 9 },
    { i: "chartFive", x: 4, y: 1, w: 4, h: 9 },
    { i: "chartSix", x: 8, y: 1, w: 4, h: 9 },
  ]);


  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dashboardGrid: DashboardGridInterface = {
    master_admin: {
      chartOne: <LineStylesDemo />,
      chartTwo: <MultiAxisDemo />,
      chartThree: <RadarDemo />,
      chartFour: <PolarAreaDemo />,
      chartFive: <PolarAreaDemo />,
      chartSix: <ApplicationsCard />,
    }
  };

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      if (result) {
        const items = result.Items;
        const formattedItems = items?.map((item) => {
          const formattedItem: any = {};
          Object.entries(item).forEach(([key, value]) => {
            formattedItem[key] = Object.values(value)[0];
          });
          return formattedItem;
        });
        if (formattedItems) {
          console.log(formattedItems, 'formatted data');
          dispatch(setselectpremierLeagueData(formattedItems));
          setData(formattedItems);
        }
      }
    }
    fetchData();
  }, []);


  const gridChildren = React.useMemo(() => {
    return layout.length > 0
      ? layout.map((item, i) => {
        return (
          <div
            key={item.i}
            data-grid={{
              x: Number(item.x),
              y: Number(item.y),
              w: Number(item.w),
              h: Number(item.h)
            }}
          >

            {dashboardGrid['master_admin'][item.i as keyof MasterAdmin]}
          </div>
        );
      })
      : '';
  }, [layout]);
  return (
    <>

      <DashboardContainer className="container-cal">
        <DashboardHeader >
          <DashboardHeading paddingSm="0.4rem" className="lg:col-6 md:col-6 sm:col-12 col-12 px-3 ">
            <p>
              Welcome User
            </p>
          </DashboardHeading>
        </DashboardHeader>
        <ResponsiveGridLayout
          className="layout"
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 8, sm: 4, xs: 4, xxs: 4 }}
          rowHeight={30}
          isResizable={false}
          maxRows={2}
          isBounded={true}
          isDraggable={viewportWidth < 576 ? false : true}
        >
          {gridChildren}
        </ResponsiveGridLayout>

      </DashboardContainer>
    </>
  );
};

export default Dashboard;