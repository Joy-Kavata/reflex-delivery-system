# Reflex — Product Q&A & Cross-Examination Preparation

## How to Answer

For difficult questions, use:

**State → Context → Evidence**

### State

Give the answer directly.

### Context

Explain the reasoning behind the decision.

### Evidence

Support the answer with something concrete from the MVP, user workflow, testing or documented decision.

If the current MVP cannot answer a question confidently, use:

> "I don't know yet, but here's how I would find out."

Do not guess.

---

# Product & Business Questions

## 1. Why would a retailer use Reflex instead of WhatsApp?

**State:**
Because Reflex provides structured delivery tracking that WhatsApp conversations do not provide.

**Context:**
WhatsApp is useful for communication, but delivery information can become scattered across messages and calls. Reflex gives the retailer, dispatcher and rider a shared delivery record with a clear status.

**Evidence:**
The MVP organizes every delivery through the workflow:

**Requested → Assigned → Picked Up → Delivered**

---

## 2. Are you trying to replace WhatsApp?

**State:**
No. Reflex is not intended to replace WhatsApp as a general communication tool.

**Context:**
The product focuses specifically on delivery coordination. WhatsApp can still be used for other communication, but Reflex provides a structured place to manage delivery requests and statuses.

**Evidence:**
The MVP focuses only on delivery requests, rider assignment, status updates and delivery confirmation.

---

## 3. What specific problem are you solving?

**State:**
We are solving the lack of visibility and structure in small retailers' delivery coordination.

**Context:**
When delivery coordination happens through separate WhatsApp messages and phone calls, it can be difficult to determine who is handling an order and what its current status is.

**Evidence:**
Reflex creates a shared delivery record with an assigned rider and current status.

---

## 4. Why did you choose small electronics retailers?

**State:**
We chose small electronics and accessories retailers as a focused MVP customer segment.

**Context:**
These businesses commonly handle small local orders that can be delivered by riders, making delivery coordination a relevant operational problem.

**Evidence:**
The MVP is designed around products such as chargers, cables, earphones, power banks and phone cases.

---

## 5. Why Nairobi?

**State:**
Nairobi provides a focused environment for the MVP.

**Context:**
The product is intended for local delivery operations where retailers and riders need to coordinate customer deliveries within an urban environment.

**Evidence:**
The initial product definition explicitly targets small electronics retailers using local riders in Nairobi.

---

# Scope & MVP Questions

## 6. Why didn't you include GPS tracking?

**State:**
We intentionally excluded live GPS tracking from the MVP.

**Context:**
The primary problem we are validating is delivery coordination and status visibility. GPS would add additional technical, privacy and infrastructure requirements.

**Evidence:**
The MVP already provides visibility through the delivery states:

**Requested → Assigned → Picked Up → Delivered**

---

## 7. Why don't you automatically assign riders?

**State:**
Rider assignment is manual in the MVP.

**Context:**
Automatic assignment would require rules around rider availability, workload, location and delivery priority.

**Evidence:**
The MVP focuses on allowing the dispatcher to see open requests and deliberately choose an available rider.

---

## 8. Why don't you have route optimization?

**State:**
Route optimization is outside the MVP scope.

**Context:**
The first problem to solve is coordination rather than transportation optimization. Adding routing would introduce mapping services and additional complexity.

**Evidence:**
The roadmap places routing and optimization after the core coordination workflow has been validated.

---

## 9. Why are there only four main delivery statuses?

**State:**
We kept the MVP status workflow intentionally simple.

**Context:**
A small number of clear states makes the workflow easier for all three user roles to understand.

**Evidence:**
The core lifecycle is:

**Requested → Assigned → Picked Up → Delivered**

Additional exception states can be introduced later.

---

## 10. What happens if a delivery fails?

**State:**
The current MVP does not fully model every delivery failure scenario.

**Context:**
We prioritized the successful delivery lifecycle for the first version rather than implementing every exception case.

**Evidence:**
The roadmap identifies failed delivery, cancellation and customer-unreachable states as future improvements.

---

# Trade-Off Questions

## 11. What is the biggest weakness in your MVP?

**State:**
The biggest weakness is that the MVP relies on manual operational actions, particularly rider assignment and status updates.

**Context:**
This keeps the workflow simple, but it means the system depends on users entering accurate and timely information.

**Evidence:**
The rider must update the delivery as it moves from Assigned to Picked Up to Delivered.

---

## 12. What happens if the rider forgets to update the status?

**State:**
The system's status may become outdated.

**Context:**
The MVP depends on the rider updating the delivery after important events. This is a limitation of a workflow-based system without automatic location or event detection.

**Evidence:**
The current MVP does not include automatic GPS-based status detection.

**Future approach:**
We could introduce reminders, notifications or automated status triggers in a future version.

---

## 13. Why did you accept these weaknesses?

**State:**
We accepted them to keep the MVP focused and achievable.

**Context:**
The sprint requires us to demonstrate that we can identify and defend deliberate trade-offs rather than attempting to solve every logistics problem at once.

**Evidence:**
Our roadmap separates the core coordination MVP from later capabilities such as GPS, route optimization and automated assignment.

---

# User Questions

## 14. How does the retailer benefit?

**State:**
The retailer gets visibility into the delivery process.

**Context:**
Instead of contacting the dispatcher or rider for every update, the retailer can check the delivery record.

**Evidence:**
Each delivery has a status and assigned rider.

---

## 15. How does the dispatcher benefit?

**State:**
The dispatcher gets a centralized view of delivery requests.

**Context:**
Instead of coordinating assignments through separate conversations, the dispatcher can see open requests and assign riders through the system.

**Evidence:**
The dispatcher workflow includes viewing open requests, assigning riders and monitoring status.

---

## 16. How does the rider benefit?

**State:**
The rider gets a clear list of assigned deliveries.

**Context:**
This reduces ambiguity about which deliveries they are responsible for.

**Evidence:**
The rider can view assigned deliveries and update their status.

---

# Edge Case Questions

## 17. What if two dispatchers try to assign the same delivery?

**State:**
The system should prevent the delivery from being assigned twice.

**Context:**
Assignment needs to be handled as a controlled state transition so that once a delivery is assigned, another dispatcher cannot overwrite it unintentionally.

**Evidence:**
This behavior should be enforced by the backend and database rules.

**If asked about implementation details not yet tested:**
"I haven't validated that concurrency scenario in the current MVP, but I would test it by sending two assignment requests at the same time and verifying that only one succeeds."

---

## 18. What if the rider updates a delivery incorrectly?

**State:**
The system should restrict invalid status transitions.

**Context:**
A delivery should follow an expected sequence rather than allowing users to move randomly between states.

**Evidence:**
The intended lifecycle is:

**Requested → Assigned → Picked Up → Delivered**

---

## 19. What if the internet connection fails?

**State:**
The current MVP does not provide full offline operation.

**Context:**
Offline support introduces synchronization and conflict-resolution requirements that were outside the initial scope.

**Evidence:**
Offline mode is explicitly listed as a future improvement.

---

# Architecture-Related Product Questions

## 20. Why did you choose React, Node.js/Express and PostgreSQL?

**State:**
The team chose React and Tailwind CSS for the frontend, Node.js with Express for the backend, and PostgreSQL for persistent data.

**Context:**
The stack provides a straightforward separation between the user interface, application logic and structured delivery data.

**Evidence:**
The product requires structured entities such as delivery requests, riders and statuses, making a relational database appropriate.

**Note:**
The technical architecture lead owns the deeper technical justification.

---

## 21. Why PostgreSQL instead of storing everything in the frontend?

**State:**
Delivery information needs persistent and shared storage.

**Context:**
Multiple users — retailers, dispatchers and riders — need to work with the same delivery records.

**Evidence:**
A delivery's assignment and status must remain available after a user leaves the application.

---

# Validation Questions

## 22. How do you know retailers actually have this problem?

**State:**
The current case study defines WhatsApp and phone-based coordination as the target problem, but we have not yet conducted a full customer validation study.

**Context:**
The sprint is focused on designing and defending a solution using the provided case study.

**Evidence:**
The product is explicitly scoped around fragmented delivery coordination and lack of status visibility.

**If asked about real-world validation:**
"I would validate this through interviews with several Nairobi electronics retailers and observe their current delivery workflow before expanding the product."

---

## 23. What would you measure after launching?

**State:**
We would measure whether Reflex actually improves delivery coordination.

**Potential metrics:**

* Time taken to assign a delivery
* Percentage of deliveries with a visible status
* Number of delivery-status follow-up calls
* Delivery completion rate
* Failed or delayed deliveries
* Time from request to assignment
* User adoption by retailers, dispatchers and riders

**Why:**
These metrics would help determine whether the product is solving the original coordination problem rather than simply adding another tool.

---

# Candor Questions

## 24. What don't you know about Reflex yet?

**Answer:**

"There are areas we have not validated yet, particularly how frequently small retailers would use the system, how much they would be willing to pay, and which additional delivery features would provide the most value.

I wouldn't want to guess. I would validate those questions through retailer interviews, workflow observation and an MVP pilot."

---

## 25. What would you change if you had more time?

**Answer:**

"I would first improve reliability around delivery exceptions and status updates. After that, I would validate whether notifications, rider availability and GPS tracking provide enough value to justify their additional complexity."

---

## 26. What is the one thing you would not change?

**Answer:**

"I would keep the core workflow simple. The strength of the MVP is that the user can understand the delivery lifecycle quickly: Request, Assign, Pick Up and Deliver."

---

# Key Message to Remember

If the panel asks about Reflex from a product perspective, keep returning to the central idea:

> **Reflex is not trying to replace every tool a retailer uses. It gives the retailer, dispatcher and rider one shared source of truth for delivery coordination.**

The MVP deliberately prioritizes:

**Visibility → Simplicity → Coordination**

before adding:

**Automation → Optimization → Scale**
