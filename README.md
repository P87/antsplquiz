# Ant's PL Quiz

## Introduction

One of my good friends runs a Premier League quiz each season. A quiz with one or more questions each game week
as well as some season-long outright questions.

He's always ran the quiz by hand, asking the questions in a group chat and keeping track of everyone's answers in
spreadsheets. The manual input ends up being very time-consuming for him. During the Euro 2020 (actually in 2021) break
between Premier League seasons I decided to try and quickly make him a website to run his quiz from,
taking away a lot of the manual work.

Despite the small timeframe to get this done I wanted to start from scratch, without using an already made framework
like laravel. The goal is to learn something new and refresh my memory by using methods and technologies I haven't
used before, or for a while.

## Getting Started

### Development

#### Start the docker containers

    docker compose up -d

#### Insert your data into MySQL

    docker exec <container id>
    mysql -p < /data/application/teamplayers.sql

#### Start the application (with restarts on file changes)

    yarn dev

#### Visit the local site

    http://localhost:3000/

#### Lint

    yarn lint:fix

#### Run unit tests

    yarn test

## Starting with custom config

     CONFIG_OVERRIDE=/path/to/config.json yarn ts-node src/site/App.ts

##TODO:

- Improve MySQL usage with indexes etc.
- Move answer sets to admin, the app should be creating them not the database
- Rename teamplayers.sql to something better
