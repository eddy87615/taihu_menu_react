import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './font.css';

const beer = [
  {
    TWname: '臺虎 生啤酒〈嗨〉',
    JPname: 'タイフードラフトハイ | Taihu Draft High',
    img: 'assets/img/Taihu Draft High .png',
    sort: 'Taiwanese Lager | 5.00%',
    intro:
      'さわやかで、すっきりとした麦芽のうま味と、ほのかにホップの香りを感じることが出来るビールです。',
    INprice: '¥700	( 330ml_Can)',
    OUTprice: '¥600	( 330ml_Can)	',
    soldout: false,
    series: ['recommend', 'others'],
  },
  {
    TWname: '臺虎生啤酒〈嗨〉<br />多元同行限定版',
    JPname:
      'タイフードラフトハイ ダイバーシティ・リミテッドエディション | Taihu Draft High',
    img: 'assets/img/Taihu Draft High - LGPT.png',
    sort: 'Taiwanese Lager | 5.00%',
    intro:
      'さわやかで、すっきりとした麦芽のうま味と、ほのかにホップの香りを感じることが出来るビールです。タイフーは2017年から、ビールを通じてジェンダー平等を支援してきました。「タイフードラフトハイ ダイバーシティ・リミテッドエディション」をリリース。七色に輝く限定缶は、あらゆる色への包容性とLGBTQ+の多様性に対する支持を表しています！',
    INprice: '¥900	( 500ml_Can)',
    OUTprice: '¥800	( 500ml_Can)	',
    soldout: false,
    series: ['recommend', 'others'],
  },
  {
    TWname: '臺虎 精釀IPA',
    JPname: 'タイフー IPA | Taihu IPA',
    img: 'assets/img/Taihu IPA.jpeg',
    sort: 'IPA | 6.00%',
    intro:
      '様々なホップ（センテニアル、シトラス）の香りや苦みがありながら、トロピカルフルーツ感も感じられる、バランスのいいIPA。',
    INprice: '¥1,400	( 500ml_Can)',
    OUTprice: '¥1,190	( 500ml_Can)',
    soldout: false,
    series: ['recommend', 'others'],
  },
  {
    TWname: '臺虎 長島冰啤',
    JPname: 'ロングアイランドアイスビール | Taihu Long Island Iced Beer',
    img: 'assets/img/Taihu Long Island Iced Beer.png',
    sort: 'Fruited Ale | 9.99%',
    intro:
      '麦芽由来の天然発酵による9.99%の高アルコール系。カクテルの味わいをビールで表現しました。オンザロックスタイルで飲んで頂きます。',
    INprice: '¥1,200	( 500ml_Can)',
    OUTprice: '¥1,020	( 500ml_Can)',
    soldout: false,
    series: '9.99',
  },
  {
    TWname: '臺虎 柯夢脫單',
    JPname: 'セックスアンドザコスモポリタン | Taihu Sex And The Cosmopolitan',
    img: 'assets/img/Taihu Sex And The Cosmopolitan.jpeg',
    sort: 'Fruited Ale | 9.99%',
    intro:
      'コスモポリタンをインスパイアしたABV9.99%の高アルコール系。クランベリーの甘味と、柑橘系の酸味が特徴。オンザロックで飲んで頂きます。',
    INprice: '¥1,200	( 500ml_Can)',
    OUTprice: '¥1,020	( 500ml_Can)',
    soldout: true ,
    series: '9.99',
  },
  {
    TWname: '臺虎 放閃格利亞',
    JPname: 'サングリア デ セルベサ | Taihu Sangría De Cerveza',
    img: 'assets/img/Taihu Sangría De Cerveza.jpeg',
    sort: 'Fruited Ale | 9.99%',
    intro:
      'Salud（サルー）!9.99%シリーズ新作はスペインでお馴染みの国民的飲み物サングリアを再現しました！ストレートでも、オンザロックでもお楽しみいただけます。',
    INprice: '¥1,200	( 500ml_Can)',
    OUTprice: '¥1,020	( 500ml_Can)',
    soldout: true,
    series: '9.99',
  },
  {
    TWname: '臺虎 美莓大顆粒',
    JPname: 'ストロベリーダイキリ | Taihu Strawberry Daiquiri',
    img: 'assets/img/Taihu Strawberry Daiquiri.jpeg',
    sort: 'Fruited Ale | 9.99%',
    intro:
      '古典的な飲み物であるダイキリにインスパイアされた9.99シリーズ。グラスに冷凍した大きなイチゴを浮かせて注げば、淡いピンク色の魅力的なダイキリお楽しみいただけます。',
    INprice: '¥1,200	( 500ml_Can)',
    OUTprice: '¥1,020	( 500ml_Can)',
    soldout: true,
    series: '9.99',
  },
  {
    TWname: '臺虎 櫻浪',
    JPname: 'サクラサージ | Taihu Sakura Surge',
    img: 'assets/img/Taihu Sakura Surge.jpeg',
    sort: 'Fruited Ale | 9.99%',
    intro:
      '色に染まるこの春に、口でお花見してみませんか？桜の塩漬け及びいちご・ライチ・ザクロで醸造されたドラフトビール。桜香りの漂う甘酸っぱくてフルーティさの満ちる味わい、とても9.99%とは信じられない飲みやすさは、まるで満開してる桜の森に吹く強い春風。氷を入れて一緒に召し上がることをおすすめします。',
    INprice: '¥1,200	( 500ml_Can)',
    OUTprice: '¥1,020	( 500ml_Can)',
    soldout: false,
    series: '9.99',
  },
  {
    TWname: '臺虎 靠杯飛斯',
    JPname: 'カウバエフィズ | Taihu Cow-Bae Fizz',
    img: 'assets/img/Taihu Cow-Bae Fizz.jpeg',
    sort: 'Fruited Ale | 9.99%',
    intro:
      'ラモス ジンフィズにインスパイアされた新しい9.99シリーズは、発酵乳、ビターオレンジブロッサムウォーターを加えることで、滑らかでクリーミーな口当たりかつ爽やかな酸味を与え、オリジナルカクテルに添えられる伝統的なガーニッシュを連想させるようにしました。',
    INprice: '¥1,200	( 500ml_Can)',
    OUTprice: '¥1,020	( 500ml_Can)',
    soldout: true,
    series: '9.99',
  },
  // {
  //   TWname: '臺虎 哈哈哈哈哈密瓜',
  //   JPname: 'ハミメロンフーチ | Taihu Hami Melon Hooch',
  //   img: 'assets/img/Taihu Hami Melon Hooch.jpeg',
  //   sort: 'Fruited Ale | 9.99%',
  //   intro:
  //     '濃厚でフルーティーなマスクメロンの香りで、ほんのりとフローラルな香りが漂う繊細な味わいに加えて、リンゴやマンゴーなどの様々なフルーツの軽やかな香りも味わえます。一気に飲み干せば、笑いが止まらない！',
  //   INprice: '¥1,200	( 500ml_Can)',
  //   OUTprice: '¥1,020	( 500ml_Can)',
  //   soldout: true,
  //   series: '9.99',
  // },
  {
    TWname: '臺虎 柚光仙子',
    JPname: 'ムーンライト・ユーズ | Taihu Moonlight Yuzu',
    img: 'assets/img/Taihu Moonlight Yuzu.png',
    sort: 'Fruited Ale | 9.99%',
    intro:
      '濃厚なユズの香りと後味にライムの香りが重なり、喉越しの冷涼で刺激的な泡と引き立て合い、魅惑の華麗なコンビネーションが出来上がり！ ユズのデリケートな甘酸っぱいアロマは、ひらひら舞い上がって天に昇りそうな気分にさせ、そして自然発酵のアルコール度数9.99％であなたの心を完全に征服し、味覚を虜にし、酔っぱらって月へと飛び立ちます！',
    INprice: '¥1,200	( 500ml_Can)',
    OUTprice: '¥1,020	( 500ml_Can)',
    soldout: false,
    series: '9.99',
  },
  {
    TWname: '臺虎 青梅竹馬',
    JPname: 'グリーンプラムエール | Taihu Green Plum ale',
    img: 'assets/img/Taihu Green Plum ale.jpeg',
    sort: 'Fruited Ale | 5.00%',
    intro:
      '臺湾ではお馴染みの梅ジュースで純粋に醸造されたグリーンプラムエール。やわらかい青梅の香りにほのかなフルーツエステルの上品な余韻をもたらす。',
    INprice: '¥1,300	( 500ml_Can)',
    OUTprice: '¥1,100	( 500ml_Can)',
    soldout: true,
    series: 'taiwan',
  },
  {
    TWname: '臺虎 洛神在在',
    JPname: 'ハイビスカスティーエール | Taihu Hibiscus Tea Ale',
    img: 'assets/img/Taihu Hibiscus Tea Ale.jpeg',
    sort: 'FGose | 5.00%',
    intro:
      'ハイビスカス（ロゼール）、台湾でお馴染みの梅、山楂（サンザシ）、コリアンダーシード、どれも台湾ならではの原料でハイビスカスの特徴的な甘酸っぱさを強調し、ほのかにスパイシー感のあるゴーゼ。爽やかで心地よいのど越しに、コク深い一品。',
    INprice: '¥1,300	( 500ml_Can)',
    OUTprice: '¥1,100	( 500ml_Can)',
    soldout: false,
    series: 'taiwan',
  },
  // {
  //   TWname: '臺虎 騷包仙草啤酒',
  //   JPname: 'グラスゼリーエール | Taihu Grass Jelly Ale',
  //   img: 'assets/img/Taihu Grass Jelly Ale.png',
  //   sort: 'Ale | 4.50%',
  //   intro:
  //     'ヘッドブリューワーのウィニーと台南のTCRCとのコラボレーション最新作。台湾やアジア他の地域でスイーツやドリンクのトッピングとしてもお馴染みの仙草ゼリーのビールです。淹れたてのミントティーの香りと滑らかな味わいが乾いた喉を癒します。',
  //   INprice: '¥1,300	( 500ml_Can)',
  //   OUTprice: '¥1,100	( 500ml_Can)',
  //   soldout: false,
  //   series: 'taiwan',
  // },
  {
    TWname: '臺虎 檬檬冬冬',
    JPname: 'ウィンターメロンレモンエール | Taihu Winter Melon Lemon Ale',
    img: 'assets/img/Taihu Winter Melon Lemon Ale.jpeg',
    sort: 'Fruited Ale | 5.00%',
    intro:
      '冬瓜茶とレモンの香りで構成されたクラシックな定番フレーバー！ほのかな酸味のあるライムの風味が程よい泡と溶け合い、冬瓜のハチミツの甘さと脂っぽさを和らげ、クリスピーな酸味を引き出す。',
    INprice: '¥1,300	( 500ml_Can)',
    OUTprice: '¥1,100	( 500ml_Can)',
    soldout: false,
    series: 'taiwan',
  },
  {
    TWname: '臺虎 桃汁夭夭',
    JPname: 'スターフルーツ・ジュース・ゴゼ | Taihu Star Fruit Juice Gose',
    img: 'assets/img/Taihu Star Fruit Juice Gose.jpeg',
    sort: 'Gose | 5.00%',
    intro:
      '渇きを癒し、暑さを和らげる楊桃(スターフルーツ)ジュースをビールに変えてみました！爽やかなドイツ風サワービールのGoseをベースに、昔ながらの漬け込んだスターフルーツを組み合わせ、甘酸っぱい本格的な台湾の味を醸造しました！',
    INprice: '¥1,300	( 500ml_Can)',
    OUTprice: '¥1,100	( 500ml_Can)',
    soldout: false,
    series: 'taiwan',
  },
  {
    TWname: '臺虎 金迷 桂花金萱茶艾爾',
    JPname: '桂花金萱ウーロン茶エール | Taihu Osmanthus Oolong Tea Ale',
    img: 'assets/img/Taihu Osmanthus Oolong Tea Ale.png',
    sort: 'Tea Ale | 5.00%',
    intro:
      'キンモクセイ (桂花)が金萱ウーロン茶と融合し、花の香りの中にさわやかなお茶の風味が広がります。ボディを柔らかくし、幾層もの香りをもたらしてくれます。',
    INprice: '¥1,400	( 500ml_Can)',
    OUTprice: '¥1,190	( 500ml_Can)',
    soldout: false,
    series: 'others',
  },
  {
    TWname: '臺虎 X CHOYA焙茶梅啤酒',
    JPname: 'TAIHU X CHOYAほうじ茶梅エール | Taihu X CHOYA Hojicha Plum Ale',
    img: 'assets/img/Taihu X CHOYA Hojicha Plum Ale.png',
    sort: 'Fruited Ale | 5.00%',
    intro:
      'CHOYAとのコラボレーションビールを再び作りました。国産100％の「紀州南高梅」と静岡ほうじ茶を使用し、全体的なフレーバー レベルを強調し、最後に心地良いティーフレーバーで、淹れたてのようなフレッシュな甘さと香りの上品な甘さを作り出します。',
    INprice: '¥1,300	( 500ml_Can)',
    OUTprice: '¥1,100	( 500ml_Can)',
    soldout: false,
    series: 'others',
  },
  {
    TWname: '臺虎 特選檳啤',
    JPname: 'ビンロウ IPA | Taihu Betel Nut IPA',
    img: 'assets/img/Taihu Betel Nut IPA.png',
    sort: 'IPA | 6.00%',
    intro:
      '台湾のチューインガムと言われる「檳榔」は、かつて多くの台湾人が気分を高揚させるために食したB級文化特産品でした。フルーティーなIPAをベースに、爽やかなグアバの香りを加え、檳榔の葉を浸すことで全体の風味を際立たせ、檳榔を噛まなくても台湾気分満点の檳榔ビールに仕上げました。',
    INprice: '¥1,200	( 330ml_Can)',
    OUTprice: '¥1,020	( 330ml_Can)',
    soldout: false,
    series: 'others',
  },
  {
    TWname: '臺虎 臺式檸檬沙瓦',
    JPname: '台式レモンサワービール | Taihu Lemon Formosawa',
    img: 'assets/img/Taihu Lemon Formosawa.png',
    sort: 'Fruited Ale | 8.00%',
    intro:
      'レモンの華やかな香りとさわやかさでさっぱりとした味わいです。刺激の少ない本格的な台湾のレモンサワーテイスト。オンザロックで飲んで頂きます。',
    INprice: '¥900	( 330ml_Can)',
    OUTprice: '¥770	( 330ml_Can)',
    soldout: false,
    series: 'others',
  },
  {
    TWname: '臺虎 甘芭爹地',
    JPname: '臺湾グァバゴーゼ | Taihu Taiwanese Guava Gose',
    img: 'assets/img/Taihu Taiwanese Guava Gose.jpeg',
    sort: 'Gose | 5.00%',
    intro:
      '台湾の果物市場の定番を連想させるゴーゼスタイル。台湾の文化で重要な役割を果たすフレーバー要素と伝統的なビアスタイルをブレンドすることでビール作りについて再考する新たなシリーズのビール。',
    INprice: '¥1,300	( 500ml_Can)',
    OUTprice: '¥1,110	( 500ml_Can)',
    soldout: false,
    series: 'taiwan',
  },
];

function Header({ selectedSeries, onSeriesChange }) {
  return (
    <header>
      <h1>
        <img src="assets/img/LOGO兩側臺虎精釀.svg" alt="taihu logo" />
      </h1>
      <h2 className="title">TAIHU BREWING</h2>
      <select
        value={selectedSeries}
        onChange={onSeriesChange}
        className="filter"
      >
        <option value="recommend">おすすめ</option>
        <option value="9.99">9.99シリーズ</option>
        <option value="taiwan">台湾シリーズ</option>
        <option value="all">全部</option>
        <option value="others">その他</option>
      </select>
    </header>
  );
}

function Menu({ selectedSeries }) {
  return (
    <main>
      {beer.map((item, index) => {
        const seriesArray = Array.isArray(item.series)
          ? item.series
          : [item.series];

        if (
          selectedSeries === 'all' ||
          seriesArray.some((series) => selectedSeries.includes(series))
        ) {
          const isSoldOut = item.soldout === true;
          const classNames = [
            'beer',
            isSoldOut ? 'sold-out' : '',
            seriesArray.includes('recommend') ? 'recommend' : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <div key={index} className={classNames}>
              <h3
                className="beer_twname"
                dangerouslySetInnerHTML={{ __html: item.TWname }}
              ></h3>
              <h4 className="beer_jpname">{item.JPname}</h4>
              <div className="beer_info">
                <img src={item.img} alt={item.JPname} />
                <p className="intro">{item.intro}</p>
              </div>
              <p className="sort">{item.sort}</p>
              <ul className="price">
                <li>店内：{item.INprice}</li>
                <li>お持ち帰り：{item.OUTprice}</li>
              </ul>
            </div>
          );
        } else {
          return null;
        }
      })}
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small>&copy; 2023TIAHU TOKYO CANBEER MENU.All Rights Reserved.</small>
    </footer>
  );
}

function App() {
  const [selectedSeries, setSelectedSeries] = useState('recommend');

  const handleSeriesChange = (event) => {
    setSelectedSeries(event.target.value);
  };

  return (
    <>
      <Header
        selectedSeries={selectedSeries}
        onSeriesChange={handleSeriesChange}
      />
      <Menu selectedSeries={selectedSeries} />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
