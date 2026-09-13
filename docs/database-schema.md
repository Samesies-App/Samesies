# Database Schema

## User

Represents a Samesies member.

Fields:

- id
- username
- phone_number
- location_zone
- availability
- trust_level
- created_at

---

## Hobby

Represents a hobby or interest.

Fields:

- id
- name
- category

Examples:

- Astronomy
- Photography
- Retro Gaming
- Amateur Radio
- Board Games

---

## UserHobby

Links users to hobbies.

Fields:

- id
- user_id
- hobby_id
- experience_level

Levels:

- Curious
- Beginner
- Regular
- Enthusiast
- Mentor

---

## Connection

Represents a connection request.

Fields:

- id
- requester_id
- recipient_id
- status

Status:

- Pending
- Accepted
- Declined

---

## Gathering

Represents a public hobby meetup.

Fields:

- id
- creator_id
- hobby_id
- title
- description
- location
- event_date

---

## Attendance

Tracks gathering participation.

Fields:

- id
- user_id
- gathering_id
- status

---

## Report

User safety and moderation reports.

Fields:

- id
- reporter_id
- reported_user_id
- category
- details
- created_at

Categories:

- Harassment
- Scam
- Impersonation
- Unsafe Conduct
- Stalking
- Other

---

## Design Goal

Keep the schema simple.

Every table should support the core mission:

Help nearby people discover shared interests and connect safely in real life.
