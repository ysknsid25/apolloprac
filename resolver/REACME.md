# Apolloサーバー環境構築

## コマンド

    git init
    npm install apollo-server@2.19.0 graphql@15.4.0

## PubSub

Subscriptionによるイベントを作成する工場のような存在。
リゾルバ関数のcontextとしてすべてのリゾルバに共有される。

## gql

GraphQLに関連する定義をJavaScriptの文字列として表現できるようにする。

## リゾルバ関数の引数

- parent
    - 親リゾルバ空の戻り値
- args
    - フィールドに提供されたすべてのGraphQL引数を含むオブジェクト
- context
    - 到底の差往査に対して実行されるすべてのリゾルバ間で共有される。これを使用して認証情報やデータソースへのアクセスなどの操作ごとの状態を共有する。
- info
    - フィールド名、ルートからフィールドへのパスなど、操作の実行状態に関する情報

## Subscription

先にSubscriptionを実行しておく。

    subscription{
        post{
            mutation
            data{
            title
            author
            }
        }
    }

で、mutationを実行する。