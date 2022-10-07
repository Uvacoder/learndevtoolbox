# Abstraction

## Definition

**Abstraction** is the result of defining the **common properties** and **methods** observed in a set of **different classes**.

Abstract classes **can not be instantiated**.

:::tip
Take into account that classes obtained through abstraction may **not** be **abstract** classes.
:::

## Example

In this example we are going to look at two different classes that have some common **properties** and **methods**. Through abstraction we'll to be able to define an abstract class from which they will inherit.

_Person class_

<<< @/archive/concepts-definitions/abstraction/snippets/Person.ts

_Cat class_

<<< @/archive/concepts-definitions/abstraction/snippets/Cat.ts

It is clear that those two classes have `dateOfBirth`, `run` and `sleep` in common. Let's abstract those common properties and methods into a new class.

_Animal class_

<<< @/archive/concepts-definitions/abstraction/snippets/Animal.ts

As we can see we have defined properties and methods that can be found in both classes. If you pay close attention to the `run` method you'll see it is `abstract`, this means that classes that **inherit** from `Animal` will have to implement that logic.

It makes complete sense because the details of how a `Person` runs are very different from how a `Cat` runs (just picture a person running on their two feet and a cat on their four paws).

We should always review the classes that triggered that abstraction to make use they now inherit the new class.

_Person class_

<<< @/archive/concepts-definitions/abstraction/snippets/Person.abstracted.ts

_Cat class_

<<< @/archive/concepts-definitions/abstraction/snippets/Cat.abstracted.ts
