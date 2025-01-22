import { Button, Flex } from 'antd';
import { Card } from 'antd';

const { Meta } = Card;


export const FilmFlex = () => {
    
    return (
        <Flex wrap gap="small">
            {Array.from(
                {
                    length: 24,
                },
                (_, i) => (
                    <Card
                        key={i}
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}

                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                ),
            )}
        </Flex>
    )
}

// import const FilmFlex = () => (
//     return (
//         <Flex wrap gap="small">
//             {Array.from(
//                 {
//                     length: 24,
//                 },
//                 (_, i) => (
//                     <Button key={i} type="primary">
//                         Button
//                     </Button>
//                 ),
//             )}
//         </Flex>
//     )
 
// );
