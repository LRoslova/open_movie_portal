
import { Menu , Button, Image} from "antd";
import {HeartOutlined, HomeOutlined, LoginOutlined, UserOutlined} from '@ant-design/icons';

export const Header = () => {
    // const items = new Array(5).fill(null).map((_, index) => ({
    //     key: index + 1,
    //     label: `nav ${index + 1}`,
    //   }));
  const items = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: 'На главную',
    },
    {
      key: '2',
      icon: <HeartOutlined />,
      label: 'Избранное',
    },
    {
      key: '3',
      icon: <UserOutlined />,
      label: 'Гость',
    }
  ]    

    return (
        <div  style={{
            display: 'flex',
            alignItems: 'center',
          }}>
        
        <div className="demo-logo">
          <Image
          width={50}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        </div>/

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            justifyContent: "space-between"
          }}
        />
        <Button type="primary"> <LoginOutlined /> Войти </Button>

        </div>
    )
}
