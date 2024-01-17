import React, { useState } from 'react';
import { Outlet,useNavigate, Link } from 'react-router-dom';
import LOGOOOO from "./LOGOOOO.png";
import { MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';
import {AiTwotoneDashboard,
         AiOutlineShopping,
         AiOutlineUser,
         
} from "react-icons/ai";
import { LiaListSolid ,LiaBlogger} from "react-icons/lia";
import { BiCategoryAlt,BiSolidColor } from "react-icons/bi";
import { CiBoxList } from "react-icons/ci";
import { CgColorBucket } from "react-icons/cg";
import { LuClipboardList } from "react-icons/lu";
import { IoAddCircleOutline } from "react-icons/io5";
import { PiListBulletsDuotone } from "react-icons/pi";
import { TbCategoryPlus } from "react-icons/tb";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";
import { MdOutlineNotificationsActive } from "react-icons/md";

import { Layout, Menu, Button, theme } from 'antd';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const Navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken(); 
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >
        <h2 className='text-white fs-5 text-center py-3 mb-0'>
          <span className='sm-logo'>EC</span>
          <span className='lg-logo'>Etincelle Candle</span>
        </h2>
       </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key})=>{
            if (key=='signout'){

            }else {
              Navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <AiTwotoneDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <AiOutlineUser className='fs-4' />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <AiOutlineShopping className='fs-4' />,
              label: 'Catalog',
              children:[
                {
                  key: 'product',
                  icon: <IoAddCircleOutline className='fs-4' />,
                  label: 'Add Product',
                },
                {
                  key: 'product-list',
                  icon: <LiaListSolid className='fs-4' />,
                  label: 'Product List',
                },
                {
                  key: 'Category',
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: 'Add Category',
                },
                {
                  key: 'Category-list',
                  icon: <CiBoxList className='fs-4' />,
                  label: 'Category List',
                },
                {
                  key: 'color',
                  icon: <CgColorBucket className='fs-4' />,
                  label: 'Add Color',
                },
                {
                  key: 'color-list',
                  icon: <BiSolidColor className='fs-4' />,
                  label: 'Color List',
                },
              ],
            },
            {
              key: 'Orders',
              icon: <LuClipboardList className='fs-4' />,
              label: 'Orders',
            },
            {
              key: 'Blogs',
              icon: <LiaBlogger className='fs-4' />,
              label: 'Blogs',
              children:[
                {
                  key: 'Blog',
                  icon: <IoAddCircleOutline className='fs-4' />,
                  label: 'Add BLog',
                },
                {
                  key: 'blog-list',
                  icon: <PiListBulletsDuotone className='fs-4' />,
                  label: 'BLog List',
                },
                {
                  key: 'bLog-category',
                  icon: <TbCategoryPlus className='fs-4' />,
                  label: 'Add BLog Category',
                },
                {
                  key: 'BLog-category-list',
                  icon: <TfiLayoutListThumbAlt className='fs-4' />,
                  label: 'BLog Category List',
                },
              ]
            },
            {
              key: 'enquiries',
              icon: <LuClipboardList className='fs-4' />,
              label: 'enquiries',
            },
            
       ]}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header
          className='d-flex justify-content-between ps-1 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed? MenuUnfoldOutlined:MenuFoldOutlined,
            {
              className:"trigger",
              onClick:() => setCollapsed(!collapsed),
            }
          )}
          <div className='d-flex gap-4 align-items-center'>
            <div className='position-relative'>
              <MdOutlineNotificationsActive className='fs-4'/>
           
            <span className='badge bg-warning rounded-circle p-1 position-absolute'>
              3
            </span>
            </div>
            <div className='d-flex gap-3 align-items-right'
                  role='button'
                  id='dropdownMenuLink'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
              <div>
                <img
                    width={30}
                    height={30}
                    src={LOGOOOO} 
                    alt="logo" 
                />
              </div>
              </div>
              <div className='d-flex gap-3 align-items-right'
                     role='button'
                     id='dropdownMenuLink'
                     data-bs-toggle='dropdown'
                     aria-expanded='false'>
                <h5 className='mb-0' >Lobna</h5>
                <p className='mb-0'>rejeblobna1@gmail.com</p>
              </div>
              <div className='dropdown-menu'
                    aria-labelledby='dropdownMenuLink'>
                <li>
                  <Link className='dropdown-item py-2 mb-0' style={{height:"auto", lineHeight:"20px"}} to='/'>View Profile</Link>
                </li>
                <li>
                  <Link className='dropdown-item py-2 mb-0' style={{height:"auto", lineHeight:"20px"}} to='/'>signout</Link>
                </li>
              </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         <Outlet/>
         </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;