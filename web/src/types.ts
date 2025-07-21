export type Project = {
  url: string;
  title: string;
  description: string;
  source: string;
  alt: string;
};

export type Team = {
  source: string;
  identifier: string;
  position: string;
};

export type CountryList = {
  country: string;
};

export type Conduct = {
  caption: string;
  title: string;
  description: string;
  timeline: string;
};

export type SvgIcon = {
  url: string;
  target: string;
  name: string;
  source: string;
  alt: string;
};

export type CardSelection = {
  title: string;
  caption: string;
  source: string;
  alt: string;
};
