import React from 'react';
import { List, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);


const Articles = (props) => {
    return (

        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={props.data}
            footer={
                <div>
                    <b>
                        footer
                    </b>
              </div>
            }
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}

                >
                    <List.Item.Meta

                        title={<a href={`/${item.id}`}>{item.title}</a>}
                        // description={item.content}
                        
                    />
                    {item.content}
                    <small><br></br><b>{item.timestamp}</b></small>
                </List.Item>
            )}
        />

    );
}

export default Articles; 