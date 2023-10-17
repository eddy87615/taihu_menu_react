import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './font.css';

const beer = [
  {
    TWname: '臺虎 生啤酒〈嗨〉',
    JPname: 'タイフードラフトハイ | Taihu Draft High',
    img: 'accets/img/Taihu Draft High .png',
    sort: 'Taiwanese Lager | 5.00%',
    intro:
      'さわやかで、すっきりとした麦芽のうま味と、ほのかにホップの香りを感じることが出来るビールです。',
    INprice: '¥700	( 330ml_Can)',
    OUTprice: '¥600	( 330ml_Can)	',
    soldout: false,
    series: 'always',
  },
  {
    TWname: '臺虎 精釀IPA',
    JPname: 'タイフー IPA | Taihu IPA',
    img: 'accets/img/Taihu IPA.jpeg',
    sort: 'IPA | 6.00%',
    intro:
      '様々なホップ（センテニアル、シトラス）の香りや苦みがありながら、トロピカルフルーツ感も感じられる、バランスのいいIPA。',
    INprice: '¥1,400	( 500ml_Can)',
    OUTprice: '¥1,190	( 500ml_Can)',
    soldout: false,
    series: 'always',
  },
  {
    TWname: '臺虎 長島冰啤',
    JPname: 'ロングアイランドアイスビール | Taihu Long',
    img: 'accets/img/Taihu Long Island Iced Beer.png',
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
    img: 'accets/img/Taihu Sex And The Cosmopolitan.jpeg',
    sort: 'Fruited Ale | 9.99%',
    intro:
      'コスモポリタンをインスパイアしたABV9.99%の高アルコール系。クランベリーの甘味と、柑橘系の酸味が特徴。オンザロックで飲んで頂きます。',
    INprice: '¥1,200	( 500ml_Can)',
    OUTprice: '¥1,020	( 500ml_Can)',
    soldout: false,
    series: '9.99',
  },
  {
    TWname: '臺虎 放閃格利亞',
    JPname: 'サングリア デ セルベサ | Taihu Sangría De Cerveza',
    img: 'accets/img/Taihu Sangría De Cerveza.jpeg',
    sort: 'Fruited Ale | 9.99%',
    intro:
      'Salud（サルー）!9.99%シリーズ新作はスペインでお馴染みの国民的飲み物サングリアを再現しました！ストレートでも、オンザロックでもお楽しみいただけます。',
    INprice: '¥1,200	( 500ml_Can)',
    OUTprice: '¥1,020	( 500ml_Can)',
    soldout: false,
    series: '9.99',
  },
  {
    TWname: '臺虎 美莓大顆粒',
    JPname: 'ストロベリーダイキリ | Taihu Strawberry Daiquiri',
    img: 'accets/img/Taihu Strawberry Daiquiri.jpeg',
    sort: 'Fruited Ale | 9.99%',
    intro:
      '古典的な飲み物であるダイキリにインスパイアされた9.99シリーズ。グラスに冷凍した大きなイチゴを浮かせて注げば、淡いピンク色の魅力的なダイキリお楽しみいただけます。',
    INprice: '¥1,200	( 500ml_Can)',
    OUTprice: '¥1,020	( 500ml_Can)',
    soldout: false,
    series: '9.99',
  },
  {
    TWname: '臺虎 櫻浪',
    JPname: 'サクラサージ | Taihu Sakura Surge',
    img: 'accets/img/Taihu Sakura Surge.jpeg',
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
    img: 'accets/img/Taihu Cow-Bae Fizz.jpeg',
    sort: 'Fruited Ale | 9.99%',
    intro:
      'ラモス ジンフィズにインスパイアされた新しい9.99シリーズは、発酵乳、ビターオレンジブロッサムウォーターを加えることで、滑らかでクリーミーな口当たりかつ爽やかな酸味を与え、オリジナルカクテルに添えられる伝統的なガーニッシュを連想させるようにしました。',
    INprice: '¥1,200	( 500ml_Can)',
    OUTprice: '¥1,020	( 500ml_Can)',
    soldout: false,
    series: '9.99',
  },
  {
    TWname: '臺虎 哈哈哈哈哈密瓜',
    JPname: 'ハミメロンフーチ | Taihu Hami Melon Hooch',
    img: 'accets/img/Taihu Hami Melon Hooch.jpeg',
    sort: 'Fruited Ale | 9.99%',
    intro:
      '濃厚でフルーティーなマスクメロンの香りで、ほんのりとフローラルな香りが漂う繊細な味わいに加えて、リンゴやマンゴーなどの様々なフルーツの軽やかな香りも味わえます。一気に飲み干せば、笑いが止まらない！',
    INprice: '¥1,200	( 500ml_Can)',
    OUTprice: '¥1,020	( 500ml_Can)',
    soldout: 'ture',
    series: '9.99',
  },
  {
    TWname: '臺虎 柚光仙子',
    JPname: 'ムーンライト・ユーズ | Taihu Moonlight Yuzu',
    img: 'accets/img/Taihu Moonlight Yuzu.png',
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
    img: 'accets/img/Taihu Green Plum ale.jpeg',
    sort: 'Fruited Ale | 5.00%',
    intro:
      '臺湾ではお馴染みの梅ジュースで純粋に醸造されたグリーンプラムエール。やわらかい青梅の香りにほのかなフルーツエステルの上品な余韻をもたらす。',
    INprice: '¥1,300	( 500ml_Can)',
    OUTprice: '¥1,100	( 500ml_Can)',
    soldout: false,
    series: 'taiwan',
  },
  {
    TWname: '臺虎 洛神在在',
    JPname: 'ハイビスカスティーエール | Taihu Hibiscus Tea Ale',
    img: 'accets/img/Taihu Hibiscus Tea Ale.jpeg',
    sort: 'FGose | 5.00%',
    intro:
      'ハイビスカス（ロゼール）、台湾でお馴染みの梅、山楂（サンザシ）、コリアンダーシード、どれも台湾ならではの原料でハイビスカスの特徴的な甘酸っぱさを強調し、ほのかにスパイシー感のあるゴーゼ。爽やかで心地よいのど越しに、コク深い一品。',
    INprice: '¥1,300	( 500ml_Can)',
    OUTprice: '¥1,100	( 500ml_Can)',
    soldout: false,
    series: 'taiwan',
  },
  {
    TWname: '臺虎 騷包仙草啤酒',
    JPname: 'グラスゼリーエール | Taihu Grass Jelly Ale',
    img: 'accets/img/Taihu Grass Jelly Ale.png',
    sort: 'Ale | 4.50%',
    intro:
      'ヘッドブリューワーのウィニーと台南のTCRCとのコラボレーション最新作。台湾やアジア他の地域でスイーツやドリンクのトッピングとしてもお馴染みの仙草ゼリーのビールです。淹れたてのミントティーの香りと滑らかな味わいが乾いた喉を癒します。',
    INprice: '¥1,300	( 500ml_Can)',
    OUTprice: '¥1,100	( 500ml_Can)',
    soldout: false,
    series: 'taiwan',
  },
  {
    TWname: '臺虎 檬檬冬冬',
    JPname: 'ウィンターメロンレモンエール | Taihu Winter Melon Lemon Ale',
    img: 'accets/img/Taihu Winter Melon Lemon Ale.jpeg',
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
    img: 'accets/img/Taihu Star Fruit Juice Gose.jpeg',
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
    img: 'accets/img/Taihu Osmanthus Oolong Tea Ale.png',
    sort: 'Tea Ale | 5.00%',
    intro:
      'キンモクセイ (桂花)が金萱ウーロン茶と融合し、花の香りの中にさわやかなお茶の風味が広がります。ボディを柔らかくし、幾層もの香りをもたらしてくれます。',
    INprice: '¥1,400	( 500ml_Can)',
    OUTprice: '¥1,190	( 500ml_Can)',
    soldout: 'true',
    series: 'others',
  },
  {
    TWname: '臺虎 特選檳啤',
    JPname: 'ビンロウ IPA | Taihu Betel Nut IPA',
    img: 'accets/img/Taihu Betel Nut IPA.png',
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
    img: 'accets/img/Taihu Lemon Formosawa.png',
    sort: 'Fruited Ale | 8.00%',
    intro:
      'レモンの華やかな香りとさわやかさでさっぱりとした味わいです。刺激の少ない本格的な台湾のレモンサワーテイスト。オンザロックで飲んで頂きます。',
    INprice: '¥900	( 330ml_Can)',
    OUTprice: '¥770	( 330ml_Can)',
    soldout: false,
    series: 'others',
  },
];

function Header({ selectedSeries, onSeriesChange }) {
  return (
    <header>
      <h1>
        <img src="accets/img/LOGO+兩側臺虎精釀.svg" alt="Taihu Logo" />
      </h1>
      <h2>TAIHU BREWING</h2>
      <select value={selectedSeries} onChange={onSeriesChange}>
        <option value="all">全部</option>
        <option value="9.99">9.99系列</option>
        <option value="taiwan">台湾系列</option>
        <option value="others">其他系列</option>
      </select>
    </header>
  );
}

function Menu({ selectedSeries }) {
  return (
    <main>
      {beer.map((item, index) => {
        if (
          selectedSeries === 'all' ||
          item.series === selectedSeries ||
          item.series === 'always'
        ) {
          return (
            <div key={index}>
              <h3>{item.TWname}</h3>
              <h4>{item.JPname}</h4>
              <img src={item.img} alt={item.JPname} />
              <p>{item.sort}</p>
              <p>{item.intro}</p>
              <ul>
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
  return <div></div>;
}

function App() {
  const [selectedSeries, setSelectedSeries] = useState('all');

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
