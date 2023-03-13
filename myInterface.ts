interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

const franco: User = {
  dbId: 22,
  email: "franco@parente.com",
  userId: 2211,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "Franco", off: 22) => {
    return 10;
  },
};

franco.email = "parente@franco.com";
// franco.dbId = 35
