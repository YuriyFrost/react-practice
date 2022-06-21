import express from "express"

const servers = [
  {
    price: 21700,
    segments: [
      {
        origin: 'OGZ',
        destination: 'ASF',
        duration: 340,
        stops: ['SPB', 'RND', 'EKB'],
        date: '2022-04-24 07:35:48'
      },
      {
        origin: 'ASF',
        destination: 'OGZ',
        duration: 410,
        stops: [],
        date: '2022-04-25 23:23:48'
      }
    ]
  },
  {
    price: 16100,
    segments: [
      {
        origin: 'MOS',
        destination: 'KEJ',
        duration: 180,
        stops: ['EKB'],
        date: '2022-06-15 08:15:48'
      },
      {
        origin: 'KEJ',
        destination: 'MOS',
        duration: 210,
        stops: [],
        date: '2022-06-18 14:56:48'
      }
    ]
  },
  {
    price: 17040,
    segments: [
      {
        origin: 'KVX',
        destination: 'EKB',
        duration: 315,
        stops: ['SPB', 'RND', 'EKB'],
        date: '2022-05-02 12:33:48'
      },
      {
        origin: 'EKB',
        destination: 'KVX',
        duration: 430,
        stops: ['SPB'],
        date: '2022-05-04 05:00:48'
      }
    ]
  },
  {
    price: 15000,
    segments: [
      {
        origin: 'MOS',
        destination: 'KRR',
        duration: 250,
        stops: [],
        date: '2022-10-29 10:02:48'
      },
      {
        origin: 'KRR',
        destination: 'MOS',
        duration: 170,
        stops: [],
        date: '2022-10-30 13:42:48'
      }
    ]
  },
  {
    price: 18150,
    segments: [
      {
        origin: 'KZN',
        destination: 'KGD',
        duration: 200,
        stops: ['RND'],
        date: '2022-12-29 10:25:48'
      },
      {
        origin: 'KGD',
        destination: 'KZN',
        duration: 264,
        stops: ['SPB'],
        date: '2022-12-31 07:40:48'
      }
    ]
  },
  {
    price: 19300,
    segments: [
      {
        origin: 'RND',
        destination: 'EKB',
        duration: 550,
        stops: ['SPB', 'MOS'],
        date: '2022-07-23 20:55:48'
      },
      {
        origin: 'EKB',
        destination: 'RND',
        duration: 492,
        stops: ['SPB'],
        date: '2022-07-24 11:10:48'
      }
    ]
  },
  {
    price: 20540,
    segments: [
      {
        origin: 'MOS',
        destination: 'DXB',
        duration: 487,
        stops: ['URS', 'KRR'],
        date: '2022-09-20 09:30:48'
      },
      {
        origin: 'DXB',
        destination: 'MOS',
        duration: 612,
        stops: [],
        date: '2022-09-23 07:40:48'
      }
    ]
  },
  {
    price: 22800,
    segments: [
      {
        origin: 'MOS',
        destination: 'VVO',
        duration: 365,
        stops: ['SPB', 'RND'],
        date: '2022-08-02 16:25:48'
      },
      {
        origin: 'VVO',
        destination: 'MOS',
        duration: 405,
        stops: ['SPB', 'RND', 'KEJ'],
        date: '2022-08-05 18:30:48'
      }
    ]
  },
  {
    price: 23000,
    segments: [
      {
        origin: 'MOS',
        destination: 'EKB',
        duration: 700,
        stops: ['SPB', 'RND', 'KEJ'],
        date: '2022-03-29 22:20:48'
      },
      {
        origin: 'EKB',
        destination: 'MOS',
        duration: 780,
        stops: ['KEJ', 'RND', 'SPB'],
        date: '2022-04-01 15:35:48'
      }
    ]
  },
  {
    price: 24350,
    segments: [
      {
        origin: 'VOG',
        destination: 'KGD',
        duration: 610,
        stops: ['SPB', 'RND'],
        date: '2022-07-15 17:00:48'
      },
      {
        origin: 'KGD',
        destination: 'VOG',
        duration: 545,
        stops: ['SPB', 'RND'],
        date: '2022-07-16 00:10:48'
      }
    ]
  }
]

const app = express()

app.listen(3001, () => {
  console.log('hi');
})


app.get('/api/server', (req, res) => {
  res.set({'Access-Control-Allow-Origin': '*'})
  res.json(servers)
})